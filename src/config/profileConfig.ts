import type { ProfileConfig } from "../types/profileConfig";

/**
 * 用户资料配置
 * 用于侧边栏和页脚显示的个人信息
 */
export const profileConfig: ProfileConfig = {
	// 头像图片路径（相对于public目录）
	avatar: "assets/images/picture.png",
	// 用户名/昵称（显示在头像下方）
	name: "一只喵⁹",
	// 个人简介/签名（显示在用户名下方）
	bio: "Hello, Everyone.",

	// 社交链接列表（显示在简介下方）
	links: [
		{
			// 链接名称（用于hover提示）
			name: "qq",
			// 图标名称（来自astro-icon）
			icon: "fa7-brands:qq",
			// 链接地址
			url: "https://qq.com/2773434682/",
			// 是否显示链接名称（true=显示，false=只显示图标）
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/LuvGaze/",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			// mailto:协议，点击打开邮件客户端
			url: "mailto:2773434682@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			// RSS订阅地址
			url: "/rss/",
			showName: false,
		},
	],
};
