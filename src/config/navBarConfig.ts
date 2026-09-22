import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";
import { navMenuConfig, type NavMenuNode } from "./navMenuConfig";

/**
 * 导航栏配置：完全由 navMenuConfig 的菜单树驱动（后台「导航菜单」树形编辑器可改）。
 * 页面级开关（siteConfig.pages.xxx）由节点上的 pageKey 关联，
 * Navbar.astro 渲染时会再次按 pageKey 过滤，此处只需透传树结构。
 */
const nodeToLink = (node: NavMenuNode): NavBarLink | null => {
	if (!node.enabled) return null;
	const link: NavBarLink = {
		name: node.name,
		url: node.url,
		...(node.icon ? { icon: node.icon } : {}),
		...(node.external ? { external: true } : {}),
		...(node.pageKey ? { pageKey: node.pageKey } : {}),
	};
	if (node.children && node.children.length > 0) {
		const kids = node.children
			.map(nodeToLink)
			.filter((k): k is NavBarLink => k !== null);
		if (kids.length > 0) link.children = kids;
	}
	return link;
};

const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: NavBarLink[] = navMenuConfig.menus
		.map(nodeToLink)
		.filter((l): l is NavBarLink => l !== null);
	return { links } as NavBarConfig;
};

// 导航栏搜索配置
// method: 搜索方式，可选 NavBarSearchMethod.PageFind（基于 PageFind 本地搜索引擎，值为 0）
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// 导航栏配置（由 navMenuConfig 菜单树动态生成）
export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
