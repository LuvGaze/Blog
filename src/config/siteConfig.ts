import type { SiteConfig } from "@/types/siteConfig";

const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "一只喵⁹",
	subtitle: "❀ 等风听雨 ︱ 梅花落 ❀",
	site_url: "https://LuvGaze.com",
	description: "Firefly 是一款基于 Astro 框架和 Fuwari 模板开发的清新美观且现代化个人博客主题模板，专为技术爱好者和内容创作者设计。该主题融合了现代 Web 技术栈，提供了丰富的功能模块和高度可定制的界面，让您能够轻松打造出专业且美观的个人博客网站。",
	keywords: ["Firefly", "Fuwari", "Astro", "ACGN", "博客", "技术博客", "静态博客"],
	themeColor: {
		hue: 360,
		fixed: false,
		defaultMode: "system",
	},
	pageWidth: 100,
	card: {
		border: true,
		followTheme: false,
	},
	favicon: [
		{
			src: "/favicon/favicon.ico",
			sizes: "32x32",
		},
	],
	navbar: {
		logo: {
			type: "image",
			value: "assets/images/firefly.png",
			alt: "🍀",
		},
		title: "一只喵⁹",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},
	siteStartDate: "2025-01-01",
	timezone: "Asia/Shanghai",
	pages: {
		friends: true,
		sponsor: true,
		guestbook: true,
		bangumi: false,
		gallery: true,
		anime: false,
		books: true,
		movies: true,
		games: true,
		musicPage: true,
		changelog: true,
		routines: true,
		places: true,
		notebooks: true,
	},
	categoryBar: false,
	foldArticle: true,
	postListLayout: {
		defaultMode: "grid",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: true,
			columnWidth: 320,
		},
	},
	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		sharePoster: true,
		generateOgImages: false,
	},
	bangumi: {
		userId: "xxxxxx",
		mode: "dynamic",
		apiUrl: "https://bgmapi.anibt.net",
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		categoryOrder: ["anime", "book", "music", "game"],
	},
	anime: {
		bilibili: {
			uid: "473335461",
		},
	},
	pagination: {
		postsPerPage: 20,
	},
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com", "*.bilibili.com"],
	},
	lang: "zh_CN",
};
