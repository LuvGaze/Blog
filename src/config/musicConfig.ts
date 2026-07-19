import type { MusicPlayerConfig } from "../types/musicConfig";
import musicData from "../data/music.json";

export interface PlaylistConfig {
	id: string;
	name: string;
	description: string;
	server: "netease" | "tencent" | "kugou" | "xiami" | "baidu";
	type: "playlist" | "album" | "artist";
	playlistId: string;
	cover?: string;
}

export const musicPlayerConfig: MusicPlayerConfig = musicData;