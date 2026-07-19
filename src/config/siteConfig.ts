import type { SiteConfig } from "@/types/siteConfig";
import siteData from "../data/site.json";

const SITE_LANG = siteData.lang;

export const siteConfig: SiteConfig = siteData;