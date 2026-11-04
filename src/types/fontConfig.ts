/** 全局本地字体配置 */
export interface FontSelectionConfig {
    /** 是否启用自定义字体；关闭时使用系统默认字体 */
    enable: boolean;
    /**
     * 字体文件路径（放在 public 目录下，以 / 开头）。
     * 留空表示不设置字体，使用系统默认字体。
     */
    fontFile: string;
    /** font-family 名称；留空则自动取文件名（不含扩展名） */
    fontFamily?: string;
    /** 字重，默认 400 */
    fontWeight?: string | number;
    /** 字体样式，默认 normal */
    fontStyle?: "normal" | "italic";
    /** 字体加载策略，默认 swap */
    fontDisplay?: "auto" | "block" | "swap" | "fallback" | "optional";
}
