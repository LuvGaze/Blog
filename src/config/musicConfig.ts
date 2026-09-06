import type { MusicPlayerConfig } from "../types/musicConfig";

/**
 * 音乐播放器配置
 * 用于侧边栏和导航栏的音乐播放器
 */
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器按钮
	showInNavbar: true,
	// 播放器模式："meting"使用Meting image-api（支持网易云等平台），"local"本地音乐
	mode: "meting",
	// 默认音量（0-1）
	volume: 0.65,
	// 播放模式："random"随机，"single"单曲循环，"list"列表循环
	playMode: "random",
	// 是否自动开始播放（开启后会在首次用户交互时自动播放）
	autoplay: true,
	// 是否显示歌词
	showLyrics: true,
	// 是否在页面底部固定显示歌词条（无论页面如何滚动都显示当前歌词）
	lyricsFixedBottom: true,

	// 底部固定歌词条配置
	lyrics: {
		// 是否区分「已播放」与「未播放」字的颜色（卡拉OK式渐显）
		progressFill: true,
		// 已播放文字颜色
		playedColor: "#EEDEB0",
		// 未播放文字颜色
		unplayedColor: "rgba(170,185,200,0.85)",
	},

	// Meting API配置（用于加载远程音乐，server/type/id 即默认歌单）
	meting: {
		// Meting API地址（支持占位符替换）
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&r=:r",
		// 默认服务器
		server: "netease",
		// 默认类型
		type: "playlist",
		// 默认歌单ID
		id: "866045961",
		// 认证token（某些API需要）
		auth: "",
		// 备用API列表（当主API不可用时使用）
		fallbackApis: [
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		],
	},

	// 本地音乐配置（当mode为"local"时使用）
	local: {
		playlist: [
			{
				// 歌曲名称
				name: "使一颗心免于哀伤",
				// 歌手/艺术家
				artist: "知更鸟 / HOYO-MiX / Chevy",
				// 音频文件路径（相对于public目录）
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				// 封面图片路径
				cover: "/assets/music/cover/109951169585655912.webp",
				// 歌词文件路径（留空则不显示歌词）
				lrc: "",
			},
		],
	},

	// 3D 可视化器配置
	visualizer: {
		// 整站统一开关：false 使用下方独立主题；true 跟随站点主题色(--primary)/背景
		followSiteTheme: false,
		background: {
			dark: "#0a0a15",
			light: "#2D2D2D",
		},
		camera: {
			position: {
				x: 0,
				y: 32,
				z: 52,
			},
		},
		autoRotate: true,
		autoRotateSpeed: 0.3,
		height: {
			idle: 0.6,
			subBass: 4.0,
			bass: 3.0,
			lowMid: 2.0,
			mid: 2.5,
			highMid: 2.0,
			energy: 4.0,
			ripple: 3.0,
			rippleAccent: 1.0,
		},
		theme: {
			base1: "#050810",
			base2: "#0a0f1a",
			coolCore: "#2255ff",
			coolEdge: "#8844ff",
			warmCore: "#ff4422",
			warmEdge: "#ffaa00",
			rippleColor: "#44ddff",
			glowIntensity: 1.2,
		},
	},
};
