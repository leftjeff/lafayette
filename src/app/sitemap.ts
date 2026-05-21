import type { MetadataRoute } from "next";
import { getLegacyPages } from "@/lib/legacy";
import { site } from "@/lib/site";

const BASE = site.url;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/park",
    "/park/nature",
    "/events",
    "/history",
    "/archive",
    "/get-involved",
    "/contact",
  ];
  const main = routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: (path === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const pages = await getLegacyPages();
  const archive = pages.map((p) => ({
    url: `${BASE}/archive/${p.slug}`,
    lastModified: p.modified ? new Date(p.modified) : now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...main, ...archive];
}
