import type { SiteConfig } from "@/types/siteConfig";

/**
 * 站点基础配置
 * 这里包含网站的核心设置，修改后需要重启开发服务器才能生效
 */
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题（显示在浏览器标签页和SEO中）
	title: "一只喵⁹",
	// 站点副标题（显示在主页横幅区域）
	subtitle: "❀ 等风听雨 ︱ 梅花落 ❀",
	// 站点域名（用于生成绝对URL、RSS等）
	site_url: "https://LuvGaze.com",
	// 站点描述（用于SEO和社交分享）
	description: "Firefly 是一款基于 Astro 框架和 Fuwari 模板开发的清新美观且现代化个人博客主题模板，专为技术爱好者和内容创作者设计。该主题融合了现代 Web 技术栈，提供了丰富的功能模块和高度可定制的界面，让您能够轻松打造出专业且美观的个人博客网站。",
	// 站点关键词（用于SEO）
	keywords: ["Firefly", "Fuwari", "Astro", "ACGN", "博客", "技术博客", "静态博客"],

	// 主题颜色配置
	themeColor: {
		// 主题色相值（0-360），0=红色，120=绿色，240=蓝色，360=红色
		hue: 360,
		// 是否固定主题色（true=用户无法通过控制面板调整）
		fixed: false,
		// 默认主题模式："system"跟随系统，"light"亮色，"dark"暗色
		defaultMode: "system",
	},

	// 页面最大宽度（百分比），设为100表示全屏宽度
	pageWidth: 100,

	// 卡片样式配置
	card: {
		// 是否显示卡片边框
		border: true,
		// 卡片颜色是否跟随主题色
		followTheme: false,
	},

	// 网站图标（Favicon）配置
	favicon: [
		{
			// 图标路径（相对于public目录）
			src: "/favicon/favicon.ico",
			// 图标尺寸
			sizes: "32x32",
		},
	],

	// 导航栏配置
	navbar: {
		logo: {
			// Logo类型："image"图片，"text"文字，"emoji"表情符号
			type: "image",
			// Logo值（图片路径、文字内容或表情符号）
			value: "assets/images/firefly.png",
			// Logo替代文本（用于无障碍访问）
			alt: "🍀",
		},
		// 导航栏标题（显示在Logo右侧）
		title: "一只喵⁹",
		// 导航栏是否全屏宽度
		widthFull: false,
		// 菜单对齐方式："left"左对齐，"center"居中，"right"右对齐
		menuAlign: "center",
		// 导航栏颜色是否跟随主题色
		followTheme: false,
		// 是否启用粘性导航栏（滚动时保持在顶部）
		stickyNavbar: true,
	},

	// 网站创建日期（用于计算网站运行时长）
	siteStartDate: "2025-01-01",
	// 时区设置（用于日期显示）
	timezone: "Asia/Shanghai",

	// 页面功能开关
	// 将对应的项设为 true 显示该页面，设为 false 隐藏该页面
	pages: {
		friends: true,      // 友链页面
		sponsor: true,      // 打赏页面
		guestbook: false,    // 留言板页面
		bangumi: false,     // 番组计划页面
		gallery: true,      // 相册页面
		anime: true,       // 追番页面
		books: true,        // 书架页面
		movies: true,       // 影视页面
		games: true,        // 游戏页面
		musicPage: false,    // 音乐页面
		changelog: true,    // 更新日志页面
		routines: true,     // 规划页面
		places: true,       // 足迹页面
		notebooks: true,    // 笔记本页面
	},

	// 是否在主页显示分类栏（文章顶部的分类标签条）
	categoryBar: false,
	// 文章列表是否默认折叠长文章
	foldArticle: true,

	// 文章列表布局配置
	postListLayout: {
		// 默认布局模式："grid"网格，"list"列表
		defaultMode: "grid",
		// 移动端默认布局模式
		mobileDefaultMode: "list",
		// 是否显示文章标签
		showTags: true,
		// 文章描述显示行数（0表示不限制）
		descriptionLines: 2,
		// 是否允许用户切换布局模式
		allowSwitch: true,
		// 网格布局配置
		grid: {
			// 是否启用瀑布流布局
			masonry: true,
			// 列宽度（像素）
			columnWidth: 320,
		},
	},

	// 文章详情页配置
	post: {
		// 提示框（Callouts）配置
		rehypeCallouts: {
			// 提示框主题："github" GitHub风格，"modern"现代风格
			theme: "github",
			// 是否启用Python Markdown Admonitions语法
			enablePythonMarkdownAdmonitions: false,
		},
		// 是否显示文章最后修改时间
		showLastModified: true,
		// 文章过时提醒阈值（天数），超过此天数会显示"本文已过时"提示
		outdatedThreshold: 30,
		// 是否启用分享海报功能
		sharePoster: true,
		// 是否自动生成OG图片（用于社交分享）
		generateOgImages: false,
	},

	// 番组计划（Bangumi）配置
	bangumi: {
		// Bangumi.tv 用户ID（用于拉取追番数据）
		userId: "xxxxxx",
		// 数据模式："dynamic"动态拉取，"static"静态数据
		mode: "dynamic",
		// Bangumi API地址
		apiUrl: "https://bgmapi.anibt.net",
		// Bangumi 条目基础URL
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		// 分类显示顺序
		categoryOrder: ["book", "anime", "music", "game"],
	},

	// Bilibili 追番配置
	anime: {
		bilibili: {
			// Bilibili 用户UID
			uid: "473335461",
		},
	},

	// 分页配置
	pagination: {
		// 每页显示文章数量
		postsPerPage: 20,
	},

	// 图片优化配置
	imageOptimization: {
		// 优化格式："webp" WebP格式，"avif" AVIF格式，"all"同时生成多种格式
		formats: "webp",
		// 图片质量（1-100）
		quality: 85,
		// 不需要referrer的域名列表（用于第三方图片CDN）
		noReferrerDomains: ["*.hdslb.com", "*.bilibili.com"],
	},

	// 站点语言
	lang: SITE_LANG,
};
