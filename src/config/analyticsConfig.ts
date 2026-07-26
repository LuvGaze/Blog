import type { AnalyticsConfig } from "@/types/analyticsConfig";

/**
 * 网站统计分析配置
 * 用于集成各种网站流量统计工具，帮助了解访客数据
 */
export const analyticsConfig: AnalyticsConfig = {
	// Google Analytics 跟踪ID（格式：G-XXXXXXXXXX）
	googleAnalyticsId: "",

	// Microsoft Clarity 项目ID（用于热力图和会话回放）
	microsoftClarityId: "",

	// Umami 分析配置（轻量级隐私友好型分析工具）
	umamiAnalytics: {
		// Umami 网站ID（在Umami后台创建站点后获得）
		websiteId: "",
		// Umami 脚本地址（官方云服务地址或自建地址）
		scriptUrl: "https://cloud.umami.is/script.js",
		// 会话回放脚本地址（如需启用会话回放功能）
		replaysScriptUrl: "https://cloud.umami.is/recorder.js",
		// 是否跟踪外部链接点击
		trackOutboundLinks: true,
		// 是否收集 Web Vitals 性能指标
		collectWebVitals: false,
		// 会话回放配置
		replays: {
			// 是否启用会话回放
			enabled: false,
			// 采样率（0-1），例如0.15表示15%的会话会被记录
			sampleRate: 0.15,
			// 隐私遮罩级别："off"关闭，"moderate"中等，"strict"严格
			maskLevel: "moderate",
			// 最大录制时长（毫秒）
			maxDuration: 300000,
			// 需要屏蔽的元素选择器（如包含敏感信息的表单）
			blockSelector: "",
		},
	},

	// LA51 分析配置（国内分析工具）
	la51Analytics: {
		// LA51 项目ID
		Id: "",
		// SDK 地址
		sdkUrl: "",
		// 密钥
		ck: "",
		// 是否自动跟踪页面浏览
		autoTrack: false,
		// 是否使用 hash 模式（单页应用）
		hashMode: false,
		// 是否启用屏幕录制
		screenRecord: true,
	},
};
