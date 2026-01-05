export const dynamic = "force-static";
import Blogs from "@/page-components/Blogs/Blogs";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions from Bleeding Tech experts.",
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
    alternates: { canonical: "https://bleedingtech.com.np/blogs" },

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
    url: "https://bleedingtech.com.np/blogs",
    siteName: "Bleeding Tech",
    title: "Blogs - Bleeding Tech",
    description:
      "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions from Bleeding Tech experts.",
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
    title: "Blogs - Bleeding Tech",
    description:
      "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Script
          id="blogs-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blogs",
              headline: "Blogs - Bleeding Tech",
              description:
                "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions from Bleeding Tech experts.",
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
                "@id": "https://bleedingtech.com.np/blogs",
              },
            }),
          }}
        />
       <Blogs />
    </>
   
  )
  
}
