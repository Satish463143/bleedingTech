export const dynamic = "force-static";
export const revalidate = false;

import type { MetadataRoute } from "next";
import { blogs, caseStudies } from "../src/data/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bleedingtech.com.np";

  const staticRoutes = [
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

  const blogRoutes = blogs.map((b) => ({
    url: `${base}/blogs-details/${b.slug}/${b.id}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${base}/case-study-detail/${c.slug}/${c.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
