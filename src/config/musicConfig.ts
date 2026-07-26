import type { MusicPlayerConfig } from "../types/musicConfig";

/**
 * 播放列表配置接口
 */
export interface PlaylistConfig {
	// 播放列表唯一ID
	id: string;
	// 播放列表名称（显示在播放器中）
	name: string;
	// 播放列表描述
	description: string;
	// 音乐平台："netease"网易云，"tencent"QQ音乐，"kugou"酷狗，"xiami"虾米，"baidu"百度
	server: "netease" | "tencent" | "kugou" | "xiami" | "baidu";
	// 类型："playlist"歌单，"album"专辑，"artist"歌手
	type: "playlist" | "album" | "artist";
	// 歌单/专辑/歌手ID
	playlistId: string;
	// 封面图片URL（可选）
	cover?: string;
}

/**
 * 音乐播放器配置
 * 用于侧边栏和导航栏的音乐播放器
 */
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器按钮
	showInNavbar: false,
	// 播放器模式："meting"使用Meting API（支持网易云等平台），"local"本地音乐
	mode: "meting",
	// 默认音量（0-1）
	volume: 0.65,
	// 播放模式："random"随机，"single"单曲循环，"list"列表循环
	playMode: "random",
	// 是否显示歌词
	showLyrics: true,

	// 播放列表（通过Meting API加载的远程歌单）
	playlists: [
		{
			id: "daily",
			name: "每日推荐",
			description: "网易云音乐每日精选",
			server: "netease",
			type: "playlist",
			playlistId: "8659142201",
		},
		{
			id: "anime",
			name: "动漫原声",
			description: "精选动漫主题曲与配乐",
			server: "netease",
			type: "playlist",
			playlistId: "672310550",
		},
		{
			id: "game",
			name: "游戏音乐",
			description: "游戏BGM精选合集",
			server: "netease",
			type: "playlist",
			playlistId: "3105952877",
		},
		{
			id: "classical",
			name: "古典音乐",
			description: "经典古典音乐作品",
			server: "tencent",
			type: "playlist",
			playlistId: "5575587639",
		},
	],

	// 当前选中的播放列表ID（对应playlists中的id）
	currentPlaylistId: "daily",

	// Meting API配置（用于加载远程音乐）
	meting: {
		// Meting API地址（支持占位符替换）
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 默认服务器
		server: "netease",
		// 默认类型
		type: "playlist",
		// 默认歌单ID
		id: "8659142201",
		// 认证token（某些API需要）
		auth: "",
		// 备用API列表（当主API不可用时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
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
};
