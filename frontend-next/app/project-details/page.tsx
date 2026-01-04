export const dynamic = "force-static";
import ProjectDetails from "@/page-components/ProjectDetails/ProjectDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description:
    "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech.",
  alternates: { canonical: "/project-details" },
  openGraph: {
    type: "article",
    url: "https://bleedingtech.com.np/project-details",
    siteName: "Bleeding Tech",
    title: "Project Details - Bleeding Tech",
    description:
      "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Details - Bleeding Tech",
    description:
      "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <ProjectDetails />;
}

