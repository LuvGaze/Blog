export interface PlaylistConfig {
	id: string;
	name: string;
	description: string;
	server: "netease" | "tencent" | "kugou" | "xiami" | "baidu";
	type: "playlist" | "album" | "artist";
	playlistId: string;
	cover?: string;
}

export type MusicPlayerConfig = {
	mode?: "meting" | "local";
	volume?: number;
	playMode?: "list" | "one" | "random";
	showLyrics?: boolean;
	showInNavbar?: boolean;

	playlists?: PlaylistConfig[];
	currentPlaylistId?: string;

	// Meting API 配置
	meting?: {
		// Meting API 地址
		api?: string;

		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server?: "netease" | "tencent" | "kugou" | "xiami" | "baidu";

		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type?: "song" | "playlist" | "album" | "search" | "artist";

		// 歌单/专辑/单曲 ID 或搜索关键词
		id?: string;

		// 认证 token（可选）
		auth?: string;

		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis?: string[];
	};

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local?: {
		playlist?: Array<{
			name: string; // 歌曲名称
			artist: string; // 艺术家
			url: string; // 音乐文件路径（相对于 public 目录）
			cover?: string; // 封面图片路径（相对于 public 目录）
			lrc?: string; // 歌词内容，支持 LRC 格式
		}>;
	};

	// 音乐可视化配置
	visualizer?: {
		// 背景颜色
		background?: {
			dark?: string;
			light?: string;
		};

		// 主题颜色
		theme?: {
			base1?: string;
			base2?: string;
			coolCore?: string;
			coolEdge?: string;
			warmCore?: string;
			warmEdge?: string;
			rippleColor?: string;
			glowIntensity?: number;
		};

		// 高度配置
		height?: {
			idle?: number;
			subBass?: number;
			bass?: number;
			lowMid?: number;
			mid?: number;
			highMid?: number;
			energy?: number;
			ripple?: number;
			rippleAccent?: number;
		};

		// 相机配置
		camera?: {
			position?: {
				x?: number;
				y?: number;
				z?: number;
			};
		};

		// 是否自动旋转
		autoRotate?: boolean;

		// 自动旋转速度
		autoRotateSpeed?: number;
	};
};
