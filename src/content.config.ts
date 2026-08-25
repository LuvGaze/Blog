import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),
		comment: z.boolean().optional().default(true),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
	schema: z.object({}),
});

const bangumiCollection = defineCollection({
	loader: glob({
		pattern: [
			"books/**/*.{md,mdx,yaml,yml}",
			"games/**/*.{md,mdx,yaml,yml}",
			"movies/**/*.{md,mdx,yaml,yml}",
		],
		base: "./src/content",
		// 保留原始文件相对路径（去扩展名）作为 id，避免默认 githubSlug 把点号/冒号等字符剥掉
		generateId: ({ entry }) => entry.replace(/\\/g, "/").replace(/\.(md|mdx|yaml|yml)$/i, ""),
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			name_cn: z.string().optional(),
			category: z
				.enum(["book", "anime", "music", "game", "real"])
				.default("anime"),
			subcategory: z.enum(["movie", "tv", "anime", "documentary"]).optional(),
			status: z.number().min(1).max(5).default(2),
			image: image().or(z.string()),
			link: z.string().optional(),
			score: z.number().min(0).max(10).optional(),
			comment: z.string().optional(),
			tags: z.array(z.string()).optional().default([]),
			date: z.coerce.date().optional(),
			time: z.string().optional(),
			artist: z.string().optional(),
			audioUrl: z.string().optional(),
			lrcUrl: z.string().optional(),
			metingServer: z.string().optional(),
			metingId: z.string().optional(),
		}),
});

const notebooksCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,json}",
		base: "./src/content/notebooks",
	}),
	schema: z.object({
		name: z.string().optional().default("未命名日记本"),
		cover: z.string().optional().default(""),
		summary: z.string().optional().default(""),
		image: z
			.union([z.string(), z.array(z.string())])
			.optional()
			.default(""),
		tags: z.array(z.string()).optional().default([]),
		date: z.coerce.date().optional(),
	}),
});

const routinesCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/plans",
	}),
	schema: z.object({
		name: z.string(),
		time: z.string().optional().default(""),
		description: z.string().optional().default(""),
		cover: z.string().optional().default(""),
		updated: z.coerce.date().optional(),
	}),
});

const travelCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/travel",
	}),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date().optional(),
		cover: z.string().optional().default(""),
		province: z.string().optional().default(""),
		city: z.string().optional().default(""),
		district: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		visitCount: z.number().optional().default(1),
		lat: z.number().optional(),
		lng: z.number().optional(),
	}),
});

const websiteCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/website" }),
	schema: z.object({
		name: z.string(),
		url: z.string(),
		icon: z.string().optional().default(""),
		description: z.string().optional().default(""),
		category: z.string().default("未分类"),
		tags: z.array(z.string()).optional().default([]),
		color: z.string().optional().default(""),
		image: z.string().optional().default(""),
		featured: z.boolean().optional().default(false),
		order: z.number().optional().default(0),
	}),
});

const changelogCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/changelog",
		// 版本文件名带点号（v1.0.0.md），保留原文件名作为 id，避免被剥成 v100
		generateId: ({ entry }) => entry.replace(/\\/g, "/").replace(/\.(md|mdx)$/i, ""),
	}),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		time: z.string().optional(),
		type: z.enum(["feature", "improvement", "fix", "removal"]),
		description: z.string(),
	}),
});

const friendsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/friends" }),
	schema: z.object({
		title: z.string(),
		imgurl: z.string(),
		desc: z.string().optional().default(""),
		siteurl: z.string(),
		tags: z.array(z.string()).optional().default([]),
		weight: z.number().optional().default(0),
		enabled: z.boolean().optional().default(true),
	}),
});

const galleryCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
	schema: z.object({
		name: z.string(),
		description: z.string().optional().default(""),
		location: z.string().optional().default(""),
		date: z.coerce.date().optional(),
		tags: z.array(z.string()).optional().default([]),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),
		images: z.array(z.string()).optional().default([]),
		cover: z.string().optional().default(""),
	}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
	bangumi: bangumiCollection,
	notebooks: notebooksCollection,
	routines: routinesCollection,
	travel: travelCollection,
	website: websiteCollection,
	changelog: changelogCollection,
	friends: friendsCollection,
	gallery: galleryCollection,
};