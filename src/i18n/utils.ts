import { siteConfig } from "../config";

export function getCurrentLang(): string {
	return siteConfig.lang || "en";
}
