/**
 * 外部番组数据配置
 * 用于从外部Gist加载番组数据（替代手动维护）
 */
export const externalBangumiConfig = {
	// 是否启用外部番组数据功能
	enable: false,
	// GitHub Gist ID（存储番组数据的Gist）
	gistId: "",
	// Gist中的文件名
	fileName: "bangumi.json",
};
