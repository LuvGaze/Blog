/**
 * 天气侧边栏组件配置
 */
export type WeatherConfig = {
	// 组件标题（缺省显示"天气预报"）
	title?: string;
	// 天气 API 地址
	apiUrl?: string;
	// 可选：指定查询城市（留空时自动定位）
	city?: string;
	// 缓存时长（分钟）
	cacheMinutes?: number;

	// 显示内容开关
	showForecast?: boolean; // 未来几天预报
	showAirQuality?: boolean; // 空气质量（AQI 详情）
	showDetails?: boolean; // 体感/湿度/风/紫外线/能见度/气压详情
	showCarousel?: boolean; // 顶部温度右侧轮播（高地温/预警/AQI）
	showAlerts?: boolean; // 气象预警
};