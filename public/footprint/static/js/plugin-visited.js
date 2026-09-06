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
            this.isEnabled = true;
            // url -> 解析后的 Feature[]（缓存，缩放切换时不再重新请求）
            this._featuresByUrl = {};
            this._currentUrls = [];
        }

        getSafeStyle(styleObj) {
            const safeStyle = { ...styleObj };
            if (safeStyle.fillOpacity === 0) safeStyle.fillOpacity = 0.01;
            if (safeStyle.strokeOpacity === 0) safeStyle.strokeOpacity = 0.01;
            return safeStyle;
        }

        _collectUrls() {
            const set = [];
            (this.config.geojsonUrls || []).forEach(u => { if (set.indexOf(u) === -1) set.push(u); });
            (this.config.coarseUrls || []).forEach(u => { if (set.indexOf(u) === -1) set.push(u); });
            (this.config.detailUrls || []).forEach(u => { if (set.indexOf(u) === -1) set.push(u); });
            return set;
        }

        async init() {
            try {
                const fetchPromises = this._collectUrls().map(url =>
                    fetch(url).then(res => res.json()).catch(e => { console.warn(`加载区域数据失败: ${url}`, e); return null; })
                );
                const results = await Promise.all(fetchPromises);
                const urls = this._collectUrls();
                urls.forEach((url, i) => {
                    const g = results[i];
                    if (g) {
                        this._featuresByUrl[url] = g.features || (g.type === 'Feature' ? [g] : []);
                    }
                });
                this.rebuild();
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

        rebuild() {
            const useDetail = this._resolveDetail();
            // 仅当概览/明细层级真正切换时才重建，避免每次缩放都重建大量多边形
            if (this._detail === useDetail) return;
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
        }

        toggle(enabled) {
            this.isEnabled = enabled;
            this.regionPolygons.forEach(poly => {
                if (enabled) poly.show();
                else poly.hide();
            });
        }

        onMarkerHover() {}
        onMarkerOut() {}
        onMarkerClick() {}
        onMapClick() {}
    }

    window.FootprintMap.Plugins.VisitedPlugin = VisitedPlugin;
})();