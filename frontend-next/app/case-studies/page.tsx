export const dynamic = "force-static";
import CaseStudies from "@/page-components/CaseStudy/CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, UI/UX design transformations, and custom software solutions delivered by Bleeding Tech.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/case-studies",
    siteName: "Bleeding Tech",
    title: "Case Studies - Bleeding Tech",
    description:
      "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, UI/UX design transformations, and custom software solutions delivered by Bleeding Tech.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Bleeding Tech",
    description:
      "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <CaseStudies />;
}
