/**
 * 恋爱计时器组件配置
 */
export type RelationshipConfig = {
	// 组件标题（会拼接总天数，如"我和宝宝在一起已经 256 天"）
	title?: string;
	// 恋爱起始日期
	startDate: string;
	// 双方名称
	name1: string;
	name2: string;
	// 双方头像（留空则不显示头像）
	avatar1?: string;
	avatar2?: string;
	// 中间爱心图片地址（留空使用默认爱心）
	heartImage?: string;
	// 是否显示头像
	showAvatars?: boolean;
	// 是否显示详细计时器（年月日 时分秒）
	showTimer?: boolean;
	// 是否显示总天数
	showTotalDays?: boolean;
	// 是否需要滚动效果（暂不使用）
	enableScroll?: boolean;
};