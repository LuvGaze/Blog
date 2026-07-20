import type { MusicPlayerConfig } from "../types/musicConfig";

export interface PlaylistConfig {
	id: string;
	name: string;
	description: string;
	server: "netease" | "tencent" | "kugou" | "xiami" | "baidu";
	type: "playlist" | "album" | "artist";
	playlistId: string;
	cover?: string;
}

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: true,
	mode: "meting",
	volume: 0.65,
	playMode: "random",
	showLyrics: true,
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
	currentPlaylistId: "daily",
	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "playlist",
		id: "8659142201",
		auth: "",
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
		],
	},
};
