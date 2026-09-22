/**
 * 颜色工具：把 16 进制颜色(#RRGGBB)转成 Oklab 的 LCh（亮度/色度/色相），
 * 以便主题主色精确等于用户填写的 hex，同时色相 hue 供整套 oklch 色族沿用。
 */

export interface Oklch {
	/** 亮度 0-1 */
	L: number;
	/** 色度（饱和度强度） */
	C: number;
	/** 色相角（与 CSS oklch() 第三参一致，0-360） */
	H: number;
}

/** 归一化 hex：#abc / #aabbcc / abc / aabbcc → [r,g,b] 0-1 */
export function parseHex(hex: string): [number, number, number] | null {
	let h = hex.trim();
	if (h.startsWith("#")) h = h.slice(1);
	if (h.length === 3) h = h.split("").map((c) => c + c).join("");
	if (h.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(h)) return null;
	const n = Number.parseInt(h, 16);
	return [
		((n >> 16) & 255) / 255,
		((n >> 8) & 255) / 255,
		(n & 255) / 255,
	];
}

/** sRGB → 线性光 */
function srgbToLinear(c: number): number {
	return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/** 16进制 → Oklch LCh */
export function hexToOklch(hex: string): Oklch | null {
	const rgb = parseHex(hex);
	if (!rgb) return null;

	// sRGB → 线性
	const r = srgbToLinear(rgb[0]);
	const g = srgbToLinear(rgb[1]);
	const b = srgbToLinear(rgb[2]);

	// 线性 RGB → LMS
	const l_ = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
	const m_ = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
	const s_ = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

	// LMS → Oklab
	const l_3 = Math.cbrt(l_);
	const m_3 = Math.cbrt(m_);
	const s_3 = Math.cbrt(s_);

	const L = 0.2104542553 * l_3 + 0.793617785 * m_3 - 0.0040720468 * s_3;
	const a = 1.9779984951 * l_3 - 2.428592205 * m_3 + 0.4505937099 * s_3;
	const b_ = 0.0259040371 * l_3 + 0.7827717662 * m_3 - 0.808675766 * s_3;

	// Oklab → LCh
	const C = Math.hypot(a, b_);
	let H = (Math.atan2(b_, a) * 180) / Math.PI;
	if (H < 0) H += 360;

	return { L, C, H };
}

/** 由 hex 取色相（0-360）；非法 hex 返回 null */
export function getHueFromHex(hex: string): number | null {
	const oklch = hexToOklch(hex);
	return oklch ? Math.round(oklch.H) : null;
}

/** 默认主题色相（未配置 color 或配置非法时兜底） */
export const DEFAULT_THEME_HUE = 250;

/**
 * 取主题色相：配置的 16 进制主色导出其色相；未配置/非法时用兜底值
 */
export function getThemeHue(color?: string, fallback: number = DEFAULT_THEME_HUE): number {
	if (typeof color === "string" && color.trim()) {
		const hue = getHueFromHex(color.trim());
		if (hue !== null) return hue;
	}
	return fallback;
}

/** 是否为合法 hex */
export function isHexColor(value: unknown): value is string {
	return typeof value === "string" && parseHex(value) !== null;
}

/**
 * 文章分类配色调色板（不同分类取不同色，同分类恒取同色）
 * 由一组 hex 主色的 Oklch 色相组成，供 --article-category-hue 使用
 */
const CATEGORY_COLOR_PALETTE = [
	"#fbbf24",
	"#fb7185",
	"#34d399",
	"#60a5fa",
	"#a78bfa",
	"#f472b6",
	"#2dd4bf",
	"#fb923c",
	"#22d3ee",
	"#818cf8",
	"#e879f9",
	"#a3e635",
	"#f87171",
	"#06b6d4",
	"#f59e0b",
	"#f43f5e",
	"#10b981",
];

const CATEGORY_COLOR_HUES = CATEGORY_COLOR_PALETTE.map((hex) =>
	getHueFromHex(hex),
).filter((h): h is number => h !== null);

/**
 * 用分类名取稳定的 Oklch 色相（0-360），保证「同分类文章同色」。
 * 取色方式：对分类名做 FNV-1a 哈希，映射到调色板色相数组 → 同分类恒同色、
 * 不同分类大概率得到明显不同且清晰可辨的颜色；调色板为空时退化为 hash%360。
 */
export function getCategoryColorHue(category: string): number {
	let hash = 2166136261;
	for (let i = 0; i < category.length; i++) {
		hash ^= category.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	hash >>>= 0;
	if (CATEGORY_COLOR_HUES.length > 0) {
		return CATEGORY_COLOR_HUES[hash % CATEGORY_COLOR_HUES.length];
	}
	return hash % 360;
}