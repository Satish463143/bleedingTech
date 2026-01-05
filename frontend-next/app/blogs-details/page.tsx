export const dynamic = "force-static";

import BlogsDetails from "@/page-components/BlogsDetails/BlogsDetails";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog Details & Tech Insights | Bleeding Tech Nepal",
  description:
    "Explore in-depth blog articles from Bleeding Tech covering web development, Next.js, React, Node.js, SEO optimization, UI/UX design, digital marketing strategies, and custom software solutions in Nepal.",

  keywords: [
    "Bleeding Tech blog",
    "tech blog Nepal",
    "web development blog",
    "Next.js blog",
    "React blog",
    "Node.js articles",
    "SEO optimization tips",
    "UI UX design blog",
    "digital marketing strategies",
    "custom software development",
    "IT company Nepal blog",
    "software engineering articles",
    "frontend backend development",
    "full stack development blog",
    "JavaScript development blog",
    "modern web technologies",
    "startup tech solutions Nepal",
    "website optimization guides",
  ],

  alternates: {
    canonical: "https://bleedingtech.com.np/blogs-details",
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
    url: "https://bleedingtech.com.np/blogs-details",
    siteName: "Bleeding Tech",
    title: "Blog Details & Tech Insights | Bleeding Tech Nepal",
    description:
      "Read expert-written blogs on web development, SEO, UI/UX, digital marketing, and modern software technologies by Bleeding Tech.",
    images: [
      {
        url: "https://bleedingtech.com.np/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bleeding Tech Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog Details & Tech Insights | Bleeding Tech",
    description:
      "Expert blogs on web development, SEO optimization, UI/UX design, and modern software engineering.",
    images: ["https://bleedingtech.com.np/og.jpg"],
  },

  authors: [{ name: "Bleeding Tech Team", url: "https://bleedingtech.com.np" }],
  category: "Technology",
};

export default function Page() {
  return(
    <>
    <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Blog Details & Tech Insights",
            description:
              "Expert-written blogs on web development, SEO, UI/UX, and digital marketing.",
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
              "@id": "https://bleedingtech.com.np/blogs-details",
            },
          }),
        }}
      />
      <BlogsDetails />;
    </>
  )
}
