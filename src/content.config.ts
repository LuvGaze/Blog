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
		pattern: "**/*.{md,mdx,yaml,yml}",
		base: "./src/content/bangumi",
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
		icon: z.string().optional().default("📌"),
		color: z.string().optional().default(""),
		updatedAt: z.union([z.string(), z.date()]).optional(),
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
		experience: z.string().optional().default(""),
		visitCount: z.number().optional().default(1),
		lat: z.number().optional(),
		lng: z.number().optional(),
	}),
});

const daohangCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/daohang" }),
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
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/changelog" }),
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
	daohang: daohangCollection,
	changelog: changelogCollection,
	friends: friendsCollection,
	gallery: galleryCollection,
};