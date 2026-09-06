/**
 * 账单页配置
 */
export interface BillsConfig {
	// 是否启用账单页面
	enabled: boolean;
	// 账单页加密密码（留空则不加密，直接显示）
	password: string;
	// 密码提示（用于加密锁界面）
	passwordHint?: string;
}

/**
 * 账单页配置
 * password 建议使用只出现在构建时的强密码（在 .env 中配置 GATE_PASSWORD，
 * 构建时经 import.meta.env 读取；非 PUBLIC_ 前缀变量不会进入前端包，仅服务端/构建期可用）
 */
export const billsConfig: BillsConfig = {
	enabled: true,
	password: import.meta.env.GATE_PASSWORD || "",
	passwordHint: "账单为个人隐私数据，请输入密码查看",
};