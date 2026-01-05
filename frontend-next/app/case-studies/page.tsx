export const dynamic = "force-static";
import CaseStudies from "@/page-components/CaseStudy/CaseStudy";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Case Studies",
  
  description:
    "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, UI/UX design transformations, and custom software solutions delivered by Bleeding Tech.",
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
    alternates: { canonical: "https://bleedingtech.com.np/case-studies" },
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
      url: "https://bleedingtech.com.np/case-studies",
      siteName: "Bleeding Tech",
      title: "Case Studies - Bleeding Tech",
      description:
        "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, UI/UX design transformations, and custom software solutions delivered by Bleeding Tech.",
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
    title: "Case Studies - Bleeding Tech",
    description:
      "Explore our successful case studies showcasing web development projects, mobile apps, SEO campaigns, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <>
    <Script
      id="casestudies-jsonld"
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
            "@id": "https://bleedingtech.com.np/case-studies",
          },
        }),
      }}
    />

  <CaseStudies />
  </>
}
