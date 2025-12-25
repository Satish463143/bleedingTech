// src/app/sitemap.ts
export const dynamic = "force-static";
export const revalidate = false;

import type { MetadataRoute } from "next";
import { blogs, caseStudies, projects } from "../src/data/data";

const base = "https://bleedingtech.com.np";

// Helper: use per-item updatedAt if you have it, otherwise use current date
const getLastMod = (item: any) => {
  const d = item?.updatedAt || item?.updated_at || item?.lastModified || item?.date;
  return d ? new Date(d) : new Date();
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about-us",
    "/services",
    "/packages",
    "/portfolio",
    "/case-studies",
    "/blogs",
    "/contact-us",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b: any) => ({
    url: `${base}/blogs/${b.slug}`,
    lastModified: getLastMod(b),
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c: any) => ({
    url: `${base}/case-study-detail?slug=${c.slug}&id=${c.id}`,
    lastModified: getLastMod(c),
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p: any) => ({
    url: `${base}/project-details?slug=${p.title.toLowerCase().replace(/\s+/g, "-")}&id=${p.id}`,
    lastModified: getLastMod(p),
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...projectRoutes];
}
