import type { SponsorConfig } from "../types/sponsorConfig";

/**
 * 打赏/赞助配置
 * 用于展示打赏方式和赞助者列表
 */
export const sponsorConfig: SponsorConfig = {
	// 打赏页面标题（留空则使用默认标题）
	title: "",
	// 打赏页面描述（留空则使用默认描述）
	description: "",
	// 使用说明（显示在打赏方式上方）
	usage: "您的打赏将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。",

	// 是否显示赞助者列表
	showSponsorsList: true,
	// 是否显示打赏留言
	showComment: true,
	// 是否在文章详情页显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			// 打赏方式名称
			name: "支付宝",
			// 图标名称（来自astro-icon）
			icon: "fa7-brands:alipay",
			// 二维码图片路径（相对于public目录）
			qrCode: "/assets/images/sponsor/alipay.png",
			// 链接地址（如果不是二维码方式则填写）
			link: "",
			// 描述文字
			description: "使用 支付宝 扫码打赏",
			// 是否启用
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.png",
			link: "",
			description: "使用 微信 扫码打赏",
			enabled: true,
		},
		{
			name: "ko-fi",
			icon: "simple-icons:kofi",
			qrCode: "",           // 无二维码，使用链接方式
			link: "https://ko-fi.com/cuteleaf",
			description: "Buy a Coffee for Firefly",
			enabled: false,
		},
		{
			name: "爱发电",
			icon: "simple-icons:afdian",
			qrCode: "",           // 无二维码，使用链接方式
			link: "https://ifdian.net/a/LuvGaze",
			description: "通过 爱发电 进行打赏",
			enabled: true,
		},
	],

	// 赞助者列表（展示已赞助的用户）
	sponsors: [
		{
			// 赞助者名称
			name: "匿名用户",
			// 头像URL（留空显示默认头像）
			avatar: "",
			// 赞助金额
			amount: "¥99999",
			// 赞助日期
			date: "2003-02-15",
		},
	],
};
