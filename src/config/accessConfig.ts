import type { AccessConfig } from "../types/accessConfig";

/**
 * 全站访问口令配置（可在 admin 后台直接修改）
 * password 作为全站共用口令：实现"全站共用一个密码"。留空时回退到环境变量 GATE_PASSWORD（构建期注入），
 * 从而既支持后台改、也兼容环境变量注入，与账单页可共用同一口令。
 *
 * 开启某页面保护：
 *  1. 设置 password（后台或环境变量 GATE_PASSWORD）
 *  2. 在 protectedRoutes 中加入该页面的路径前缀
 * protectedRoutes 为空时默认不保护任何页面（页面级开关）。
 */
export const accessConfig: AccessConfig = {
	password: "",
	protectedRoutes: ["/bills"],
	hint: "受保护的页面内容，请输入访问口令查看",
};