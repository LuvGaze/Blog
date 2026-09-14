export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
		showName?: boolean;
	}[];
	// 个人资料卡片外观配置
	style?: {
		// 头像圆形图片宽度尺寸，默认 "4rem"
		avatarWidth?: string;
		// 头像圆角，默认 "50%"（圆形）
		avatarRadius?: string;
		// 用户名文字大小，默认 "1.25rem"（text-xl）
		nameSize?: string;
		// 个人简介文字大小，默认 "0.875rem"
		bioSize?: string;
		// 背景图片（相对 public 目录），可选
		backgroundImage?: string;
		// 背景图片透明度（0-1），默认 1，仅在设置背景图时生效
		backgroundOpacity?: number;
	};
};
