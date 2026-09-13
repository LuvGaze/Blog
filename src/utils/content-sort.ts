/**
 * 内容统一排序：手动 order（越大越靠前），同 order 再按日期（新的在前）。
 * 用于所有按日期分组/展示且需要支持手动调整顺序的内容集合。
 */
export function compareOrderThenDate(
	a: { data: { order?: number; date?: Date | string } },
	b: { data: { order?: number; date?: Date | string } }
): number {
	const ao = a.data.order ?? 0;
	const bo = b.data.order ?? 0;
	if (ao !== bo) return bo - ao;
	const at = a.data.date ? new Date(a.data.date).getTime() : 0;
	const bt = b.data.date ? new Date(b.data.date).getTime() : 0;
	return bt - at;
}