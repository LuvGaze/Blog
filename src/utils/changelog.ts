import type { CollectionEntry } from "astro:content";

export type ChangelogType = "feature" | "improvement" | "fix" | "removal";

export interface ChangelogEntry {
	id: string;
	title: string;
	date: string;
	summary: string;
	detail: string;
	type: ChangelogType;
	version?: string;
	related: string[];
	rawDate?: Date;
}

export interface PageMeta {
	label: string;
	url?: string;
}

export const PAGE_META: Record<string, PageMeta> = {
	home: { label: "首页", url: "/" },
	archive: { label: "归档", url: "/archive/" },
	posts: { label: "文章", url: "/posts/" },
	categories: { label: "分类", url: "/categories/" },
	friends: { label: "友链", url: "/friends/" },
	about: { label: "关于", url: "/about/" },
	changelog: { label: "更新日志", url: "/changelog/" },
	site: { label: "全站" },
	feature: { label: "功能新增" },
	improvement: { label: "功能优化" },
	fix: { label: "问题修复" },
	removal: { label: "功能删除" },
};

const VALID_TYPES: readonly ChangelogType[] = [
	"feature",
	"improvement",
	"fix",
	"removal",
];

function normalizeType(raw: string | undefined): ChangelogType {
	const v = (raw ?? "").trim().toLowerCase();
	return (VALID_TYPES as readonly string[]).includes(v)
		? (v as ChangelogType)
		: "feature";
}

export function changelogEntriesFromCollection(
	entries: CollectionEntry<"changelog">[],
): ChangelogEntry[] {
	return entries
		.slice()
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
		.map((e) => {
			const raw = e.body ?? "";
			const detail = raw.trim();
			return {
				id: e.id,
				title: e.data.description || e.data.version || e.id,
				date: e.data.date.toISOString().slice(0, 10),
				summary: e.data.description || "",
				detail: detail || e.data.description || "",
				type: normalizeType(e.data.type),
				version: e.data.version,
				related: Array.isArray(e.data.related) ? e.data.related : [],
				rawDate: e.data.date,
			} satisfies ChangelogEntry;
		});
}

export interface ChangelogLink {
	target: number;
	label: string;
}

/**
 * 根据作者在 frontmatter 中手选的 related 字段构建日志之间的关联关系。
 * related 里可填写被关联日志的文件名 id（如 v1.0.0）或 version，命中即建立双向关联线。
 */
export function buildChangelogLinks(
	entries: ChangelogEntry[],
): Map<number, ChangelogLink[]> {
	const indexById = new Map<string, number>();
	entries.forEach((e, i) => {
		indexById.set(e.id, i);
		if (e.version) indexById.set(e.version, i);
	});
	const links = new Map<number, ChangelogLink[]>();
	const add = (from: number, to: number) => {
		if (!links.has(from)) links.set(from, []);
		const list = links.get(from)!;
		if (!list.some((l) => l.target === to)) {
			list.push({ target: to, label: entries[to].title });
		}
	};
	entries.forEach((e, i) => {
		(e.related ?? []).forEach((r) => {
			const t = indexById.get(r);
			if (t === undefined || t === i) return;
			add(i, t);
			add(t, i);
		});
	});
	return links;
}