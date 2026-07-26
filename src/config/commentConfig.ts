import type { CommentConfig } from "@/types/commentConfig";

/**
 * 评论系统配置
 * 支持多种评论系统，修改 type 字段切换使用的评论系统
 */
export const commentConfig: CommentConfig = {
	// 评论系统类型："twikoo"、"waline"、"artalk"、"giscus"、"disqus"
	type: "twikoo",

	// Twikoo 评论系统配置（轻量级，支持微信登录）
	twikoo: {
		// Twikoo 环境ID（在Vercel或其他平台部署后获得）
		envId: "https://twikoo.vercel.app",
		// 语言："zh-CN"中文，"en"英文等
		lang: "zh-CN",
		// 是否显示文章阅读量
		visitorCount: true,
		// Twikoo 脚本CDN地址
		jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.13/dist/twikoo.min.js",
		// 自定义CSS路径（用于修改评论区样式）
		cssUrl: "/assets/css/twikoo-custom.css",
	},

	// Waline 评论系统配置（功能丰富，支持多种登录方式）
	waline: {
		// Waline 服务端地址（部署后获得）
		serverURL: "https://waline.vercel.app",
		// 语言
		lang: "zh-CN",
		// 表情配置（数组形式，支持多个表情源）
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/weibo",     // 微博表情
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",  // Bilibili表情
			"https://unpkg.com/@waline/emojis@1.4.0/bmoji",     // 贴吧表情
		],
		// 登录方式："enable"启用，"disable"禁用，"force"强制登录
		login: "enable",
		// 是否显示文章阅读量
		visitorCount: true,
	},

	// Artalk 评论系统配置（自建部署，支持Markdown）
	artalk: {
		// Artalk 服务端地址
		server: "https://artalk.example.com/",
		// 语言
		locale: "zh-CN",
		// 是否显示文章阅读量
		visitorCount: true,
	},

	// Giscus 评论系统配置（基于GitHub Discussions）
	giscus: {
		// GitHub 仓库名（格式：username/repo）
		repo: "CuteLeaf/Firefly",
		// GitHub 仓库ID
		repoId: "R_kgD2gfdFGd",
		// Discussions 分类名
		category: "General",
		// 分类ID
		categoryId: "DIC_kwDOKy9HOc4CegmW",
		// 映射方式："title"按标题，"url"按URL，"pathname"按路径
		mapping: "title",
		// 是否严格匹配（0=不严格，1=严格）
		strict: "0",
		// 是否启用表情反应
		reactionsEnabled: "1",
		// 是否发送元数据
		emitMetadata: "1",
		// 输入框位置："top"顶部，"bottom"底部
		inputPosition: "top",
		// 语言
		lang: "zh-CN",
		// 加载方式："lazy"懒加载，"eager"立即加载
		loading: "lazy",
	},

	// Disqus 评论系统配置（国际知名评论系统）
	disqus: {
		// Disqus 短名称（在Disqus后台创建站点后获得）
		shortname: "firefly",
	},
};
