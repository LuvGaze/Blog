/**
 * 判断给定路径是否需要口令保护。
 * 规则：路径等于某条前缀，或以"前缀/"开头（前缀缺省尾部斜杠时自动补）。
 * @param pathname 当前页面路径，如 "/travel/2024/"
 * @param routes 需要保护的路径前缀列表，如 ["/travel/"]
 */
export function isRouteProtected(
	pathname: string,
	routes: string[],
): boolean {
	if (!pathname || !routes || routes.length === 0) return false;
	return routes.some((route) => {
		const clean = (route || "").trim();
		if (!clean) return false;
		if (pathname === clean) return true;
		const prefix = clean.endsWith("/") ? clean : `${clean}/`;
		return pathname.startsWith(prefix);
	});
}

/**
 * 由路径生成稳定的页面口令 key（用于服务端加密盐/IV 派生与客户端缓存一致）。
 * 只保留路径字母数字与连接符，避免非法字符。
 */
export function slugifyPath(pathname: string): string {
	const clean = pathname
		.replace(/^\/+/, "")
		.replace(/\/+$/, "")
		.split("/")
		.filter(Boolean)
		.join("-");
	return clean.replace(/[^a-zA-Z0-9-_]/g, "") || "home";
}