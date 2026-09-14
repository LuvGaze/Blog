import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 侧边栏布局配置
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 是否启用侧边栏功能
	enable: true,

	// 是否全屏靠边：true 时内容区铺满整个视口宽度，左右侧边栏贴到屏幕边缘
	fullWidth: false,

	// 侧边栏与中间内容的间距（grid 列间距）
	gridGap: "1rem",
	// 侧边栏到页面左右边框的水平间距
	gridEdgeX: "-2.5rem",
	// 主网格上下的垂直间距
	gridEdgeY: "1rem",

	// 侧边栏位置：
	// left: 仅显示左侧边栏
	// right: 仅显示右侧边栏
	// both: 双侧边栏，1280px以上同时显示左右，769-1279px根据tabletSidebar配置显示其中一侧
	position: "both",

	// 平板端(769-1279px)显示哪侧侧边栏，仅position为both时生效
	// left: 平板端显示左侧边栏
	// right: 平板端显示右侧边栏
	tabletSidebar: "left",

	// 文章详情页隐藏侧边栏，设为 true 则只在首页等非文章页显示
	hideSidebarOnPostPage: false,

	// 文章详情页保持双侧栏
	// 使用单侧栏(position为left或right)时，是否在文章详情页显示双侧边栏，（hideSidebarOnPostPage需要保持false）
	// 当position为left时开启此项，文章详情页将额外显示右侧边栏
	// 当position为right时开启此项，文章详情页将额外显示左侧边栏
	// 适用在只想用单侧栏，但在文章详情页想用对侧栏的目录等组件的场景
	showBothSidebarsOnPostPage: false,

	// 左侧边栏组件配置列表
	// 组件的渲染顺序完全取决于它们在配置数组中出现的顺序，但top的组件会优先于sticky位置的组件渲染
	// type 组件类型
	// enable 是否启用该组件
	// showTitle 是否显示该组件标题，默认true
	// position 组件位置：top固定顶部，sticky粘性定位(会跟随页面滚动)
	// side 可选：覆盖组件显示在哪一侧（left/right）。例如放在 leftComponents 里的组件想移到右侧，加 side:"right" 即可，无需搬动数组
	// order 可选：同侧内的上下排序权重，数字越小越靠前；不填则按数组出现顺序。左右各自独立排序
	// showOnPostPage 是否在文章详情页显示该组件
	// hideOnNonPostPage 是否在非文章详情页隐藏该组件（true=仅文章详情页显示）
	// specificConfig 组件专属配置
	leftComponents: [
		{
		    type: "profile",
		    enable: true,
		    order: 1,
		    position: "top",
		    showOnPostPage: true
		   },
		{
		    type: "announcement",
		    enable: false,
		    order: 2,
		    position: "top",
		    showOnPostPage: true
		   },
		{
		    type: "weather",
		    enable: true,
		    order: 3,
		    position: "sticky",
		    showOnPostPage: true
		   },
		{
		    type: "music",
		    enable: true,
		    order: 5,
		    position: "sticky",
		    showOnPostPage: true
		   },
		{
			// 组件类型：日历组件（置于音乐下方）
			type: "calendar",
			enable: true,
			showTitle: false,
			order: 6,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: {
				calendar: {
					// 是否显示年度文章热力图
					showHeatmap: true,
				},
			},
		},
		{
		    type: "categories",
		    enable: false,
		    order: 6,
		    position: "sticky",
		    showOnPostPage: true,
		    specificConfig: {
		        collapseThreshold: 5
		       }
		   },
		{
		    type: "tags",
		    enable: false,
		    order: 7,
		    position: "sticky",
		    showOnPostPage: true,
		    specificConfig: {
		        collapseThreshold: 10
		       }
		   },
		{
		    type: "umamiStats",
		    enable: false,
		    order: 8,
		    position: "sticky",
		    showOnPostPage: true
		   }
	],

	// 右侧边栏组件配置列表
	rightComponents: [
		{
			// 组件类型：恋爱计时器组件（置顶展示）
			type: "relationship",
			// 是否启用该组件
			enable: true,
			// 同侧上下排序（最小即最靠前，置于最上方）
			order: 0,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：站点统计组件
			type: "stats",
			// 是否启用该组件
			enable: true,
			// 同侧上下排序
			order: 1,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置：控制显示哪些统计项（false 即隐藏该项）
			specificConfig: {
				stats: {
					// 显示文章数
					showPostCount: false,
					// 显示分类数
					showCategoryCount: false,
					// 显示标签数
					showTagCount: false,
					// 显示全站总字数（统计 src/content 下全部 md 正文）
					showTotalWords: true,
					// 显示运行时长
					showRunningDays: true,
					// 显示最后活动
					showLastUpdate: true,
				},
			},
		},
		{
			// 组件类型：站点信息组件
			type: "siteInfo",
			// 是否启用该组件
			enable: false,
			// 同侧上下排序
			order: 2,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置
			specificConfig: {
				siteInfo: {
					// 未能识别的构建平台回退显示文本，可自定义
					unknownBuildPlatform: "Unknown CI",
				},
			},
		},
		{
			// 组件类型：侧边栏目录组件（只在文章详情页显示）
			type: "sidebarToc",
			// 是否启用该组件
			enable: true,
			// 同侧上下排序
			order: 4,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 是否在非文章详情页隐藏
			hideOnNonPostPage: true,
		},
		{
			// 组件类型：广告栏组件 1
			type: "advertisement",
			// 是否启用该组件
			enable: false,
			// 是否显示组件标题
			showTitle: true,
			// 同侧上下排序
			order: 5,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置（广告内容直接在此配置）
			specificConfig: {
				ad: {
					image: {
						src: "/assets/images/ad/ad1.webp",
						alt: "广告横幅",
						link: "https://haoka.lot-ml.com/plugreg.html?agentid=1423316",
						external: true,
					},
					// 是否允许关闭广告
					closable: false,
					// 显示次数限制，-1为无限制
					displayCount: -1,
					// 组件内边距配置
					padding: {
						all: "1rem",
					},
				},
			},
		},
		{
			// 组件类型：广告栏组件 2
			type: "advertisement",
			// 是否启用该组件
			enable: false,
			// 同侧上下排序
			order: 6,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置（广告内容直接在此配置）
			specificConfig: {
				ad: {
					title: "支持博主",
					content:
						"感谢支持我们的创作！您的支持是我们持续更新的动力。",
					link: {
						text: "支持一下",
						url: "about/",
						external: false,
					},
					closable: false,
					displayCount: -1,
				},
			},
		},
		{
			// 组件类型：最近更新组件
			type: "recentUpdates",
			// 是否启用该组件
			enable: true,
			// 同侧上下排序
			order: 7,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置
			specificConfig: {
				recentUpdates: {
					// 显示的最新文章数量
					limit: 6,
				},
			},
		},
	],

	// 移动端底部组件配置列表
	// 这些组件只在移动端(<768px)显示在页面底部，独立于左右侧边栏配置
	mobileBottomComponents: [
		{
			// 组件类型：用户资料组件
			type: "profile",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：公告组件
			type: "announcement",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：天气组件
			type: "weather",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：恋爱计时器组件
			type: "relationship",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：音乐播放器
			type: "music",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：分类组件
			type: "categories",
			// 是否启用该组件
			enable: false,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置
			specificConfig: {
				// 折叠阈值：当分类数量超过5个时自动折叠
				collapseThreshold: 5,
			},
		},
		{
			// 组件类型：标签组件
			type: "tags",
			// 是否启用该组件
			enable: false,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置
			specificConfig: {
				// 折叠阈值：当标签数量超过20个时自动折叠
				collapseThreshold: 10,
			},
		},
		{
			// 组件类型：站点统计组件
			type: "stats",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置：控制显示哪些统计项（false 即隐藏该项）
			specificConfig: {
				stats: {
					// 显示文章数
					showPostCount: false,
					// 显示分类数
					showCategoryCount: false,
					// 显示标签数
					showTagCount: false,
					// 显示全站总字数（统计 src/content 下全部 md 正文）
					showTotalWords: false,
					// 显示运行时长
					showRunningDays: true,
					// 显示最后活动
					showLastUpdate: true,
				},
			},
		},
		{
			// 组件类型：站点信息组件
			type: "siteInfo",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 组件专属配置
			specificConfig: {
				siteInfo: {
					// 未能识别的构建平台回退显示文本，可自定义
					unknownBuildPlatform: "Unknown CI",
				},
			},
		},
	],
};
