/**
 * 全站访问口令配置
 */
export type AccessConfig = {
	// 全局统一口令（构建期通过环境变量注入，勿在仓库中硬编码明文）
	password: string;
	// 需要口令保护的页面路径前缀列表（空数组 = 默认不保护任何页面）
	// 例如 ["/travel/", "/gallery/"] 表示这些页面及其子页面需要口令
	protectedRoutes: string[];
	// 口令提示文字
	hint?: string;
};