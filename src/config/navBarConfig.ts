import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";
import { siteConfig } from "./siteConfig";

/**
 * 动态生成导航栏配置
 * 根据站点配置（siteConfig.pages）的功能开关，动态决定哪些导航项显示
 * siteConfig.pages.xxx 为 true 时显示对应页面链接，为 false 时隐藏
 */
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 导航栏链接列表，按顺序从上到下显示
	const links: NavBarLink[] = [
		LinkPresets.Home,
	];

	// 「文章」下拉菜单：包含归档、分类、标签
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			LinkPresets.Categories,
			LinkPresets.Tags,
		],
	});

	// 「网站导航」：跳转到项目展示页面
	links.push({
		name: "网站导航",
		url: "/projects/",
		icon: "material-symbols:public",
	});

	// 「动态」下拉菜单：根据 siteConfig.pages 开关动态显示留言板、笔记本
	links.push({
		name: "动态",
		url: "#",
		icon: "material-symbols:local-cafe",
		children: [
			...(siteConfig.pages.guestbook ? [{
				name: "留言板",
				url: "/guestbook/",
				icon: "material-symbols:edit-outline",
			}] : []),
			...(siteConfig.pages.notebooks ? [LinkPresets.Notebooks] : []),
		].filter(Boolean),
	});

	// 「记录」下拉菜单：根据 siteConfig.pages 开关动态显示番组、追番、书架等记录类页面
	links.push({
		name: "记录",
		url: "#",
		icon: "material-symbols:camera-outdoor",
		children: [
			...(siteConfig.pages.gallery ? [LinkPresets.Gallery] : []),
			...(siteConfig.pages.bangumi ? [LinkPresets.Bangumi] : []),
			...(siteConfig.pages.anime ? [LinkPresets.Anime] : []),
			...(siteConfig.pages.books ? [LinkPresets.Books] : []),
			...(siteConfig.pages.movies ? [LinkPresets.Movies] : []),
			...(siteConfig.pages.games ? [LinkPresets.Games] : []),
			...(siteConfig.pages.musicPage ? [LinkPresets.MusicPage] : []),
			...(siteConfig.pages.changelog ? [LinkPresets.Changelog] : []),
			...(siteConfig.pages.routines ? [LinkPresets.Routines] : []),
			...(siteConfig.pages.places ? [LinkPresets.Places] : []),
		].filter(Boolean),
	});

	// 「关于」下拉菜单：包含打赏、关于我
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [
			LinkPresets.About,
			LinkPresets.Archive,
			LinkPresets.Sponsor,
		],
	});

	// 「链接」下拉菜单：外部链接（GitHub、Gitee、文档）
	// external: true 表示外部链接，在新标签页打开；false 或省略表示站内跳转
	links.push({
		name: "链接",
		url: "#",
		icon: "material-symbols:link",
		children: [
			// 友链
			...(siteConfig.pages.friends ? [LinkPresets.Friends] : []),
			// GitHub 仓库主页
			{
				name: "GitHub",
				url: "https://github.com/LuvGaze/",
				external: true,
				icon: "fa7-brands:github",
			},
			// Gitee 仓库主页
			{
				name: "Gitee",
				url: "https://gitee.com/LuvGaze/",
				external: true,
				icon: "fa7-brands:gitee",
			},
			// 项目文档站点
			// {
			// 	name: "Firefly文档",
			// 	url: "https://docs-firefly.cuteleaf.cn",
			// 	external: true,
			// 	icon: "material-symbols:docs",
			// },
		],
	});

	return { links } as NavBarConfig;
};

// 导航栏搜索配置
// method: 搜索方式，可选 NavBarSearchMethod.PageFind（基于 PageFind 本地搜索引擎，值为 0）
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

/**
 * 导航栏链接预设
 * 每个预设是一个可复用的导航链接配置，可在 links 数组中直接引用
 * pageKey: 关联的页面标识，用于与 siteConfig.pages 中的功能开关匹配
 * external: true 表示外部链接（新标签页打开），false 或省略表示站内跳转
 */
export const LinkPresets: Record<string, NavBarLink> = {
	// 主页：跳转到站点根路径
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	// 归档页：按时间线归档所有文章
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	// 分类页：按分类浏览文章
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	// 标签页：按标签浏览文章
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	// 友链页：展示友情链接
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
		pageKey: "friends",
	},
	// 打赏页：展示赞助/打赏二维码
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	// 留言板页：访客留言互动
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	// 关于我页面：个人介绍
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	// 番组计划页：展示番组数据
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	// 相册页：图片画廊展示
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	// 追番页：追番记录展示
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
	// 书架页：书籍记录展示
	Books: {
		name: "书架",
		url: "/books/",
		icon: "material-symbols:book-5",
	},
	// 影视页：影视记录展示
	Movies: {
		name: "影视",
		url: "/movies/",
		icon: "material-symbols:movie-outline-rounded",
	},
	// 游戏页：游戏记录展示
	Games: {
		name: "游戏",
		url: "/games/",
		icon: "material-symbols:gamepad-rounded",
	},
	// 音乐页：音乐记录展示
	MusicPage: {
		name: "音乐",
		url: "/music/",
		icon: "material-symbols:music-note",
	},
	// 更新日志页：网站更新记录
	Changelog: {
		name: "更新日志",
		url: "/changelog/",
		icon: "material-symbols:history",
	},
	// 规划页：日常规划展示
	Routines: {
		name: "规划",
		url: "/plans/",
		icon: "material-symbols:list-alt",
	},
	// 足迹页：旅行地点记录
	Places: {
		name: "足迹",
		url: "/travel/",
		icon: "material-symbols:location-on",
	},
	// 笔记本页：笔记记录展示
	Notebooks: {
		name: "笔记本",
		url: "/notebooks/",
		icon: "material-symbols:menu-book-outline",
	},
};

// 导航栏配置（由 getDynamicNavBarConfig 动态生成）
export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();