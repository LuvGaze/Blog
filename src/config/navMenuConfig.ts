/**
 * 导航菜单配置（后台「导航菜单」可编辑，专用树形编辑器）
 * 整棵导航树都在这里定义：父菜单与子项均可 增删/排序/改名/显隐/配图标/外链/关联功能开关。
 * - 每个节点的 enabled 为「手动显隐」，被关闭的节点及其子级都不显示；
 * - 可选的 pageKey 关联 siteConfig.pages 功能开关（如 friends/circle），
 *   当对应页面开关为 false 时，即使 enabled=true 也不再显示（与 Navbar 过滤逻辑一致）；
 * - 修改后需重新 build 生效。
 */
export interface NavMenuNode {
	/** 菜单显示名 */
	name: string;
	/** 跳转地址（站内路径或 https:// 外链） */
	url: string;
	/** 图标（iconify 名，如 material-symbols:home） */
	icon?: string;
	/** 是否为外部链接（新标签页打开） */
	external?: boolean;
	/** 是否显示（false 时连同子级一起隐藏） */
	enabled: boolean;
	/** 关联站点功能开关（siteConfig.pages.xxx），对应页面被关闭时该节点隐藏 */
	pageKey?: string;
	/** 子菜单项 */
	children?: NavMenuNode[];
}

export const navMenuConfig = {
	// 顶部导航树，按顺序从上到下显示
	menus: [
		{
			name: "主页",
			url: "/",
			icon: "material-symbols:home",
			enabled: true,
		},
		{
			name: "文章",
			url: "/posts/",
			icon: "material-symbols:article",
			enabled: true,
			children: [
				{
					name: "文章列表",
					url: "/posts/",
					icon: "material-symbols:view-list",
					enabled: true,
				},
				{
					name: "推文",
					url: "/circle/",
					icon: "material-symbols:public",
					enabled: true,
					pageKey: "circle",
				},
				{
					name: "归档",
					url: "/archive/",
					icon: "material-symbols:archive",
					enabled: true,
				},
				{
					name: "分类",
					url: "/categories/",
					icon: "material-symbols:folder-open-rounded",
					enabled: false,
				},
				{
					name: "标签",
					url: "/tags/",
					icon: "material-symbols:tag-rounded",
					enabled: false,
				},
			],
		},
		{
			name: "网站导航",
			url: "/website/",
			icon: "material-symbols:public",
			enabled: true,
		},
		{
			name: "动态",
			url: "/moments/",
			icon: "material-symbols:local-cafe",
			enabled: true,
			children: [
				{
					name: "朋友圈",
					url: "/moments/",
					icon: "material-symbols:chat-bubble-outline",
					enabled: true,
					pageKey: "moments",
				},
				{
					name: "留言板",
					url: "/guestbook/",
					icon: "material-symbols:edit-outline",
					enabled: true,
					pageKey: "guestbook",
				},
				{
					name: "笔记本",
					url: "/notebooks/",
					icon: "material-symbols:menu-book-outline",
					enabled: true,
					pageKey: "notebooks",
				},
			],
		},
		{
			name: "记录",
			url: "#",
			icon: "material-symbols:camera-outdoor",
			enabled: true,
			children: [
				{
					name: "相册",
					url: "/gallery/",
					icon: "material-symbols:photo-library",
					enabled: true,
					pageKey: "gallery",
				},
				{
					name: "番组计划",
					url: "/bangumi/",
					icon: "material-symbols:movie",
					enabled: true,
					pageKey: "bangumi",
				},
				{
					name: "追番",
					url: "/anime/",
					icon: "material-symbols:live-tv",
					enabled: true,
					pageKey: "anime",
				},
				{
					name: "书架",
					url: "/books/",
					icon: "material-symbols:book-5",
					enabled: true,
					pageKey: "books",
				},
				{
					name: "影视",
					url: "/movies/",
					icon: "material-symbols:movie-outline-rounded",
					enabled: true,
					pageKey: "movies",
				},
				{
					name: "游戏",
					url: "/games/",
					icon: "material-symbols:gamepad-rounded",
					enabled: true,
					pageKey: "games",
				},
				{
					name: "音乐",
					url: "/music/",
					icon: "material-symbols:music-note",
					enabled: true,
					pageKey: "musicPage",
				},
				{
					name: "规划",
					url: "/plans/",
					icon: "material-symbols:list-alt",
					enabled: true,
					pageKey: "routines",
				},
				{
					name: "足迹",
					url: "/travel/",
					icon: "material-symbols:location-on",
					enabled: true,
					pageKey: "places",
				},
				{
					name: "账单",
					url: "/bills/",
					icon: "material-symbols:account-balance-wallet",
					enabled: true,
					pageKey: "bills",
				},
			],
		},
		{
			name: "关于",
			url: "#",
			icon: "material-symbols:info",
			enabled: true,
			children: [
				{
					name: "更新日志",
					url: "/changelog/",
					icon: "material-symbols:history",
					enabled: true,
					pageKey: "changelog",
				},
				{
					name: "关于我",
					url: "/about/",
					icon: "material-symbols:person",
					enabled: true,
				},
				{
					name: "友链",
					url: "/friends/",
					icon: "material-symbols:group",
					enabled: true,
					pageKey: "friends",
				},
				{
					name: "打赏",
					url: "/sponsor/",
					icon: "material-symbols:favorite",
					enabled: true,
					pageKey: "sponsor",
				},
			],
		},
		{
			name: "链接",
			url: "#",
			icon: "material-symbols:link",
			enabled: false,
			children: [
				{
					name: "GitHub",
					url: "https://github.com/LuvGaze/",
					icon: "fa7-brands:github",
					external: true,
					enabled: true,
				},
				{
					name: "Gitee",
					url: "https://gitee.com/LuvGaze/",
					icon: "fa7-brands:gitee",
					external: true,
					enabled: true,
				},
			],
		},
	],
};