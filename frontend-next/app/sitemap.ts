// src/app/sitemap.ts
export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour

import type { MetadataRoute } from "next";

const base = "https://bleedingtech.com.np";

// Helper: use per-item updatedAt if you have it, otherwise use current date
const getLastMod = (item: any) => {
  const d = item?.updatedAt || item?.updated_at || item?.lastModified || item?.date;
  return d ? new Date(d) : new Date();
};

// Fetch blogs from API
async function fetchBlogs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/blogs?limit=1000`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      console.error("Failed to fetch blogs for sitemap");
      return [];
    }
    
    const data = await response.json();
    return data?.details || [];
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return [];
  }
}
// Fetch case studies from API
async function fetchCaseStudies() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/caseStudies?limit=1000`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      console.error("Failed to fetch case studies for sitemap");
      return [];
    }
    
    const data = await response.json();
    return data?.details || [];
  } catch (error) {
    console.error("Error fetching case studies for sitemap:", error);
    return [];
  }
}
// Fetch projects from API
async function fetchProjects() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/project?limit=1000`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch projects for sitemap");
      return [];
    }
    
    const data = await response.json();
    return data?.details || [];
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    "/privacy-policy",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  // Fetch blogs dynamically
  const blogs = await fetchBlogs();
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b: any) => ({
    url: `${base}/blogs-details/${b.slug}`,
    lastModified: getLastMod(b),
  }));
  // Fetch case studies dynamically
  const caseStudies = await fetchCaseStudies();
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c: any) => ({
    url: `${base}/case-study-detail?slug=${c.slug}`,
    lastModified: getLastMod(c),
  }));

  // Fetch projects dynamically
  const projects = await fetchProjects();
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p: any) => ({
    url: `${base}/project-details?slug=${p.slug}`,
    lastModified: getLastMod(p),
  }));


  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...projectRoutes];
}
