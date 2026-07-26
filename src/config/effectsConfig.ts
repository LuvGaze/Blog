import type { SakuraConfig } from "../types/effectsConfig";

/**
 * 动画特效配置
 * 目前包含樱花飘落特效，后续可扩展其他特效
 */
export const sakuraConfig: SakuraConfig = {
	// 是否启用樱花特效
	enable: false,
	// 是否允许用户通过控制面板切换樱花特效
	switchable: true,
	// 樱花数量（建议20-50之间）
	sakuraNum: 25,
	// 限制显示次数（-1表示无限制）
	limitTimes: -1,
	// 樱花大小范围（倍数）
	size: {
		min: 0.2,  // 最小尺寸
		max: 1.1,  // 最大尺寸
	},
	// 樱花透明度范围
	opacity: {
		min: 0.3,  // 最小透明度
		max: 0.9,  // 最大透明度
	},
	// 樱花运动速度配置
	speed: {
		horizontal: {
			min: -1.7,  // 水平最小速度（负值向左）
			max: -1.2,  // 水平最大速度
		},
		vertical: {
			min: 1.5,   // 垂直最小速度（正值向下）
			max: 2.2,   // 垂直最大速度
		},
		rotation: 0.03,    // 旋转速度
		fadeSpeed: 0.03,   // 淡出速度
	},
	// 樱花特效层级（数值越大越在顶层）
	zIndex: 100,
};
