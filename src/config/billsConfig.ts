/**
 * 账单页配置
 */
export interface BillsConfig {
	// 是否启用账单页面
	enabled: boolean;
}

/**
 * 账单页配置
 * 登录/加密统一由全站访问口令（accessConfig / 环境变量 GATE_PASSWORD）负责，
 * 账单页自身不再设置独立密码。
 */
export const billsConfig: BillsConfig = {
	enabled: true,
};