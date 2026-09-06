import { Solar } from "lunar-javascript";

// 公历固定节日（MM-DD）
const SOLAR_FESTIVALS: Record<string, string> = {
	"01-01": "元旦",
	"02-14": "情人节",
	"03-08": "妇女节",
	"05-01": "劳动节",
	"05-04": "青年节",
	"06-01": "儿童节",
	"09-10": "教师节",
	"10-01": "国庆节",
	"12-25": "圣诞节",
};

// 农历节日别名：lunar-javascript 返回带“节”后缀的，统一成项目历史文案（不带节更紧凑，且与旧图一致）
const LUNAR_FESTIVAL_ALIAS: Record<string, string> = {
	龙头节: "龙抬头",
	七夕节: "七夕",
	端午节: "端午",
	中秋节: "中秋",
	重阳节: "重阳",
};

function getLunarFestival(
	year: number,
	month: number,
	day: number,
): string | null {
	try {
		const solar = Solar.fromYmd(year, month, day);
		const festivals = solar.getLunar().getFestivals();
		if (festivals.length > 0) {
			const raw = festivals[0] as string;
			return LUNAR_FESTIVAL_ALIAS[raw] ?? raw;
		}
		return null;
	} catch {
		return null;
	}
}

export function lunarLabel(year: number, month: number, day: number): string {
	const lunarFest = getLunarFestival(year, month, day);
	if (lunarFest) return lunarFest;
	const md = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
	if (SOLAR_FESTIVALS[md]) return SOLAR_FESTIVALS[md];
	try {
		const solar = Solar.fromYmd(year, month, day);
		return solar.getLunar().getDayInChinese();
	} catch {
		return "";
	}
}

export function holidayLabel(month: number, day: number): string | null {
	const md = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
	return SOLAR_FESTIVALS[md] || null;
}

export function lunarFestivalForDate(
	year: number,
	month: number,
	day: number,
): string | null {
	return getLunarFestival(year, month, day);
}
