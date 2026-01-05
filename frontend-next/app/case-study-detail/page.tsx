export const dynamic = "force-static";

import CaseStudyDetail from "@/page-components/CaseStudyDetail/CaseStudyDetail";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Case Study Details & Project Success Stories | Bleeding Tech Nepal",

  description:
    "Explore detailed case studies and real-world success stories by Bleeding Tech, showcasing web development projects, mobile applications, SEO growth results, UI/UX transformations, and custom software solutions delivered in Nepal and beyond.",

  keywords: [
    "Bleeding Tech case studies",
    "case study web development",
    "IT company case studies Nepal",
    "software development case study",
    "mobile app development projects",
    "SEO case studies",
    "UI UX design case study",
    "custom software solutions",
    "React Next.js projects",
    "Node.js backend projects",
    "full stack development case study",
    "digital transformation projects",
    "startup software projects Nepal",
    "portfolio case studies",
    "technology success stories",
    "real world software projects",
  ],

  alternates: {
    canonical: "https://bleedingtech.com.np/case-study-detail",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    url: "https://bleedingtech.com.np/case-study-detail",
    siteName: "Bleeding Tech",
    title: "Case Study Details & Project Success Stories | Bleeding Tech",
    description:
      "Dive into in-depth case studies highlighting how Bleeding Tech delivers scalable web apps, mobile solutions, SEO growth, and high-impact UI/UX designs.",
    images: [
      {
        url: "https://bleedingtech.com.np/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bleeding Tech Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Case Study Details & Project Success Stories | Bleeding Tech",
    description:
      "Real-world case studies showcasing Bleeding Tech’s expertise in web development, mobile apps, SEO optimization, and custom software.",
    images: ["https://bleedingtech.com.np/og.jpg"],
  },

  authors: [{ name: "Bleeding Tech Team", url: "https://bleedingtech.com.np" }],
  category: "Case Studies / Portfolio",
};

export default function Page() {
  return(
    <>
      <Script
      id="casestudy-jsonld"
      strategy="beforeInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CaseStudy",
          headline: "Project Case Study - Bleeding Tech",
          description:
            "A detailed case study showcasing how Bleeding Tech delivered a scalable and high-performance digital solution.",
          author: {
            "@type": "Organization",
            name: "Bleeding Tech",
            url: "https://bleedingtech.com.np",
          },
          publisher: {
            "@type": "Organization",
            name: "Bleeding Tech",
            logo: {
              "@type": "ImageObject",
              url: "https://bleedingtech.com.np/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://bleedingtech.com.np/case-study-detail",
          },
        }),
      }}
      />
      <CaseStudyDetail />
    </>
  ) 
}
