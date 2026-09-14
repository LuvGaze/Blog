import type { WeatherConfig } from "../types/weatherConfig";

export const weatherConfig: WeatherConfig = {
	// 组件标题
	title: "天气预报",
	// 天气 API 地址
	apiUrl: "https://uapis.cn/api/v1/misc/weather",
	// 缓存时长（分钟）
	cacheMinutes: 30,

	// 显示内容开关
	showForecast: true, // 未来几天预报
	showAirQuality: true, // 空气质量（AQI 详情）
	showDetails: true, // 体感/湿度/风/紫外线/能见度/气压详情
	showCarousel: true, // 顶部温度右侧轮播
	showAlerts: true, // 气象预警
};