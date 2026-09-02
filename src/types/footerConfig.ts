export type FooterConfig = {
	enable: boolean; // 是否启用Footer HTML注入功能
	showCopyright: boolean; // 是否显示内置的 © 版权说明行（false 时底部只保留 FooterConfig.html 内容）
	customHtml?: string; // 自定义HTML内容，用于添加备案号等信息
};
