/**
 * 全局本地字体配置
 *
 * 字体文件放在 public 目录下，用站内路径引用（不要带 public 前缀）：
 *   public/assets/fonts/Deng.woff → "/assets/fonts/Deng.woff"
 *   public/assets/fonts/字体.ttf → "/assets/fonts/字体.ttf"
 *
 * 留空 fontFile 即不设置字体，全站使用浏览器 / 系统默认字体。
 * 修改后需要重启开发服务器。
 */
import type {FontSelectionConfig} from "@/types/fontConfig";

export const fontConfig: FontSelectionConfig = {
	enable: true,

	// 全局字体文件；留空 = 不设置字体，使用系统默认字体
	// 例如："/assets/fonts/山海玄武体.woff"
	fontFile: "/assets/fonts/Deng.woff",

	// font-family 名称；留空则自动使用文件名
	fontFamily: "",

	// 字重与样式（单个字体文件一般填 400 / normal）
	fontWeight: 400,
	fontStyle: "normal",
	fontDisplay: "swap",
};
