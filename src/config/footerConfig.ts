import type { FooterConfig } from "../types/footerConfig";

export const footerConfig: FooterConfig = {
	// 是否启用Footer HTML注入功能
	enable: true,
	// 是否显示内置的“© 版权所有”版权说明行；设为 false 时，底部只显示 FooterConfig.html 的内容
	showCopyright: false,
};

// 直接编辑 config/FooterConfig.html 文件来添加备案号等自定义内容
