/**
 * 自定义鼠标光标配置
 *
 * 支持格式：png / gif / svg / cur / ico
 * 建议尺寸：24×24 或 32×32 像素，背景透明（过大浏览器可能忽略）
 * 放置位置：public/cursor/ 目录下
 * 路径写法："/cursor/arrow.png"（不要带 public 前缀）
 *
 * 每个状态可写图片路径字符串（沿用全局 size / hotspotX / hotspotY），
 * 也可写 { image, size, x, y } 单独指定尺寸与热区坐标。
 *
 * - default 留空 → 完全不替换光标，使用系统默认箭头
 * - pointer 留空 → 悬停在链接、按钮时沿用 default
 * - text / notAllowed / grab / grabbing / help 留空 → 配置了 default 时退回对应的系统光标
 */
export type CursorItem = string | { image: string; size?: number; x?: number; y?: number };

export const cursorConfig = {
	enable: true,
	hotspotX: 0,
	hotspotY: 0,
	/**
	 * 光标显示尺寸（像素），0 表示使用图片原始尺寸。
	 * 仅对 public 下的本地图片生效（构建时会缩放到该尺寸），
	 * .ico / .cur 会先解码再缩放；外部链接无法缩放。
	 * Windows 上的 Chrome 最大约 32×32，超过后可能被忽略。
	 * 单个状态可用 { image, size } 覆盖此值。
	 */
	size: 32,
	/** 默认状态 */
	default: "/cursor/STMC Common 15 Finger.cur",
	/** 悬停 */
	pointer: "/cursor/STMC Common 13 Hand.cur",
	/** 文本选取：文本框、输入框、可编辑区域 */
	text: { image: "/cursor/STMC Common 06 Beam (White).cur", x: 12, y: 12 },
	/** 禁止操作：禁用按钮等 */
	notAllowed: "/cursor/STMC Silent Witch 08 Not Allowed.cur",
	/** 可拖拽元素 */
	grab: "/cursor/STMC Common 13 Hand.cur",
	/** 拖拽进行中 */
	grabbing: "/cursor/STMC Common 13 Hand.cur",
	/** 帮助提示 */
	help: "/cursor/STMC Genshin 02 Help.cur",
};
