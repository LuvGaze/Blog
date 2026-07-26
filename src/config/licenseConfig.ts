import type { LicenseConfig } from "../types/licenseConfig";

/**
 * 文章许可证配置
 * 用于在文章底部显示版权许可信息
 */
export const licenseConfig: LicenseConfig = {
	// 是否在文章底部显示许可证信息
	enable: true,

	// 许可证名称
	name: "CC BY-NC-SA 4.0",
	// 许可证链接（跳转到许可证详情页面）
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// CC BY-NC-SA 4.0 含义：
// - BY: 署名（必须注明原作者）
// - NC: 非商业性使用（不能用于商业用途）
// - SA: 相同方式共享（衍生作品必须使用相同许可证）
