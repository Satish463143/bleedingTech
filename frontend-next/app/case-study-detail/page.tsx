import CaseStudyDetail from "@/page-components/CaseStudyDetail/CaseStudyDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Details",
  description:
    "Discover detailed case studies showcasing our successful web development projects, mobile applications, SEO campaigns, UI/UX design transformations, and custom software solutions by Bleeding Tech.",
  alternates: { canonical: "/case-study-detail" },
  openGraph: {
    type: "article",
    url: "https://bleedingtech.com.np/case-study-detail",
    siteName: "Bleeding Tech",
    title: "Case Study Details - Bleeding Tech",
    description:
      "Discover detailed case studies showcasing our successful web development projects, mobile applications, SEO campaigns, UI/UX design transformations, and custom software solutions.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study Details - Bleeding Tech",
    description:
      "Discover detailed case studies showcasing our successful projects in web development, mobile apps, SEO campaigns, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <CaseStudyDetail />;
}

