export const dynamic = "force-static";
export const revalidate = false;

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/api"],
    },
    sitemap: "https://bleedingtech.com.np/sitemap.xml",
  };
}
