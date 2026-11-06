/**
 * Plugin: Visited Highlight (标记点亮插件)
 * 依赖: footprintmap.js 核心
 */
(function () {
    if (!window.FootprintMap) return;

    class VisitedPlugin {
        constructor(engine) {
            this.engine = engine;
            this.map = engine.map;
            this.config = window.FootprintMap.CONFIG.HIGHLIGHT;
            this.utils = window.FootprintMap.Utils;

            // 存放所有独立解析出的多边形（大陆及岛屿）
            this.regionPolygons = [];
            // 地名图层：像真实地图一样显示全部省/市名，由 LabelsLayer 做碰撞避让
            this.labelLayer = null;
            this.labelsEnabled = true;
            this._visitedGeometries = new Set();
            this.isEnabled = true;
            // url -> 解析后的 Feature[]（缓存，缩放切换时不再重新请求）
            this._featuresByUrl = {};
            this._currentUrls = [];
        }

        getSafeStyle(styleObj) {
            const safeStyle = {...styleObj};
            if (safeStyle.fillOpacity === 0) safeStyle.fillOpacity = 0.01;
            if (safeStyle.strokeOpacity === 0) safeStyle.strokeOpacity = 0.01;
            return safeStyle;
        }

        _collectUrls() {
            const set = [];
            (this.config.geojsonUrls || []).forEach(u => {
                if (set.indexOf(u) === -1) set.push(u);
            });
            (this.config.coarseUrls || []).forEach(u => {
                if (set.indexOf(u) === -1) set.push(u);
            });
            (this.config.detailUrls || []).forEach(u => {
                if (set.indexOf(u) === -1) set.push(u);
            });
            return set;
        }

        async init() {
            try {
                const fetchPromises = this._collectUrls().map(url =>
                    fetch(url).then(res => res.json()).catch(e => {
                        console.warn(`加载区域数据失败: ${url}`, e);
                        return null;
                    })
                );
                const results = await Promise.all(fetchPromises);
                const urls = this._collectUrls();
                urls.forEach((url, i) => {
                    const g = results[i];
                    if (g) {
                        this._featuresByUrl[url] = g.features || (g.type === 'Feature' ? [g] : []);
                    }
                });
                // 数据加载完成前 zoomend 可能已把 _detail 置位，这里强制重绘一次
                this.rebuild(true);
                // 缩放级别变化时，在省界/市界之间动态切换，避免线条过多
                this.map.on('zoomend', () => this.rebuild());
            } catch (e) {
                console.error('插件数据解析异常:', e);
            }
        }

        // 根据当前缩放级别决定显示省界还是市界
        _resolveDetail() {
            const threshold = (this.config.zoomDetailThreshold === undefined) ? 6 : this.config.zoomDetailThreshold;
            return this.map.getZoom() >= threshold;
        }

        rebuild(force) {
            const useDetail = this._resolveDetail();
            // 仅当概览/明细层级真正切换时才重建，避免每次缩放都重建大量多边形；
            // force 用于首次数据加载完成后强制重绘，避免与 zoomend 抢跑导致边界不显示
            if (!force && this._detail === useDetail) return;
            this._detail = useDetail;
            const urls = [...(useDetail ? (this.config.detailUrls || []) : (this.config.coarseUrls || []))];
            this._currentUrls = urls;
            this.drawRegions(urls);
        }

        drawRegions(urls) {
            const safeDefaultStyle = this.getSafeStyle(this.config.style.default);
            const labelSet = this._labelSet || (this._labelSet = ['中国', 'china', "people's republic of china", '中华人民共和国']);

            if (this.regionPolygons.length > 0) {
                this.map.remove(this.regionPolygons);
            }
            this.regionPolygons = [];

            urls.forEach(url => {
                const features = this._featuresByUrl[url] || [];
                features.forEach(feature => {
                    const props = feature.properties || {};
                    const pName = String(props.name || props.ADMIN || props.name_zh || '').toLowerCase();

                    // 排除世界地图的中国板块
                    if (labelSet.indexOf(pName) !== -1) {
                        return;
                    }

                    const geom = feature.geometry;
                    if (!geom) return;

                    // [核心修复]：彻底抛弃 AMap.GeoJSON，手动拆解 MultiPolygon
                    // 把每一座岛屿拆解为独立的 AMap.Polygon 实例，彻底解决重影和 WebGL 崩溃
                    let polygonsCoords = [];
                    if (geom.type === 'Polygon') {
                        polygonsCoords = [geom.coordinates];
                    } else if (geom.type === 'MultiPolygon') {
                        polygonsCoords = geom.coordinates;
                    }

                    polygonsCoords.forEach(coords => {
                        const polygon = new AMap.Polygon({
                            path: coords,
                            cursor: 'default',
                            bubble: true,
                            strokeColor: safeDefaultStyle.strokeColor,
                            strokeOpacity: safeDefaultStyle.strokeOpacity,
                            strokeWeight: safeDefaultStyle.strokeWeight,
                            fillColor: safeDefaultStyle.fillColor,
                            fillOpacity: safeDefaultStyle.fillOpacity,
                            zIndex: safeDefaultStyle.zIndex
                        });

                        polygon._geoJsonGeometry = geom;
                        polygon._properties = props;
                        this.regionPolygons.push(polygon);
                    });
                });
            });

            this.updateData();

            // 批量将所有独立区块挂载到地图，性能极高
            this.map.add(this.regionPolygons);
            if (!this.isEnabled) this.regionPolygons.forEach(p => p.hide());

            this.drawLabels(urls);
        }

        updateData() {
            if (this.regionPolygons.length === 0) return;
            const validMarkers = this.engine.markerData.filter(pt => {
                if (!pt.categories || pt.categories.length === 0) return true;
                return !pt.categories.some(tag => this.config.excludeTags.includes(tag));
            });

            const safeDefault = this.getSafeStyle(this.config.style.default);
            const safeActive = this.getSafeStyle(this.config.style.active);

            // 记录被点亮的整体 Geometry（大陆亮了，岛屿自然就亮了）
            const visitedGeometry = new Set();

            this.regionPolygons.forEach(poly => {
                const geom = poly._geoJsonGeometry;
                if (geom && !visitedGeometry.has(geom)) {
                    const isVisited = validMarkers.some(pt => this.utils.isPointInGeoJSON(pt, geom));
                    if (isVisited) visitedGeometry.add(geom);
                }
            });

            this.regionPolygons.forEach(poly => {
                const isVisited = visitedGeometry.has(poly._geoJsonGeometry);
                poly.setOptions(isVisited ? safeActive : safeDefault);
            });

            this._visitedGeometries = visitedGeometry;
        }

        ensureLabelLayer() {
            if (!this.labelLayer) {
                this.labelLayer = new AMap.LabelsLayer({
                    zooms: [3, 20],
                    collision: true,
                    zIndex: 150
                });
                this.map.add(this.labelLayer);
            }
            return this.labelLayer;
        }

        // 显示当前层级（省界/市界）的全部地名；LabelsLayer 会自动做碰撞避让
        drawLabels(urls) {
            const layer = this.ensureLabelLayer();
            layer.clear();
            if (!this.labelsEnabled) return;

            const seen = new Set();
            (urls || []).forEach(url => {
                // 只标注国内的省/市，不标世界国界
                if (/world\.geojson/i.test(url)) return;
                const features = this._featuresByUrl[url] || [];
                features.forEach(feature => {
                    const props = feature.properties || {};
                    const name = String(props.name || props.ADMIN || props.name_zh || '').trim();
                    if (!name) return;
                    if (this._labelSet && this._labelSet.indexOf(name.toLowerCase()) !== -1) return;

                    const center = props.center || props.centroid;
                    if (!Array.isArray(center) || center.length < 2) return;
                    const lng = parseFloat(center[0]);
                    const lat = parseFloat(center[1]);
                    if (Number.isNaN(lng) || Number.isNaN(lat)) return;

                    const key = `${name}@${lng.toFixed(3)},${lat.toFixed(3)}`;
                    if (seen.has(key)) return;
                    seen.add(key);

                    const marker = new AMap.LabelMarker({
                        position: [lng, lat],
                        zooms: [3, 20],
                        text: {
                            content: name,
                            style: {
                                fontSize: 11,
                                fontWeight: '500',
                                fontFamily: 'sans-serif',
                                fillColor: '#334155',
                                strokeColor: '#ffffff',
                                strokeWidth: 2,
                                strokeOpacity: 0.9
                            }
                        }
                    });
                    layer.add(marker);
                });
            });
        }

        toggleBoundaries(enabled) {
            this.isEnabled = enabled;
            this.regionPolygons.forEach(poly => {
                if (enabled) poly.show();
                else poly.hide();
            });
        }

        toggleLabels(enabled) {
            this.labelsEnabled = enabled;
            if (enabled) {
                // 重新开图时补画地名（关闭期间数据可能已经更新过）
                this.drawLabels(this._currentUrls);
            } else if (this.labelLayer) {
                this.labelLayer.hide();
            }
        }

        toggle(enabled) {
            this.toggleBoundaries(enabled);
            this.toggleLabels(enabled);
        }

        onMarkerHover() {
        }

        onMarkerOut() {
        }

        onMarkerClick() {
        }

        onMapClick() {
        }
    }

    window.FootprintMap.Plugins.VisitedPlugin = VisitedPlugin;
})();