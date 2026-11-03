/**
 * 自定义鼠标光标配置
 *
 * 支持格式：png / gif / svg / cur / ico
 * 建议尺寸：24×24 或 32×32 像素，背景透明（过大浏览器可能忽略）
 * 放置位置：public/assets/cursor/ 目录下
 * 路径写法："/assets/cursor/arrow.png"（不要带 public 前缀）
 *
 * - default 留空 → 完全不替换光标，使用系统默认箭头
 * - pointer 留空 → 悬停在链接、按钮时沿用 default
 * - hotspotX / hotspotY → 热区坐标（光标“尖端”在图片内的像素位置），箭头类一般 0 0
 */
export const cursorConfig = {
	enable: true,
	default: "",
	pointer: "",
	hotspotX: 0,
	hotspotY: 0,
};
