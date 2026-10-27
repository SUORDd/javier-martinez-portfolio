import type { MetadataRoute } from "next";
import { detailedProjects } from "@/data/projects";
import { getPublicAssetPath, getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  const routes = ["", ...detailedProjects.map((project) => `/proyectos/${project.slug}/`)];
  return routes.map((route) => ({ url: `${siteUrl}${getPublicAssetPath(route)}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
