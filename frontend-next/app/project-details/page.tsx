export const dynamic = "force-static";
import ProjectDetails from "@/page-components/ProjectDetails/ProjectDetails";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Project Details",
  description:
    "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech.",
  
    keywords: [
      "web development projects",
      "mobile applications",
      "SEO campaigns",
      "UI/UX designs",
      "custom software solutions",
      "IT company Nepal projects",
      "UI UX design projects",
      "mobile app development projects",
      "web development projects Nepal",
      "software development projects Nepal",
      "MERN stack projects Nepal",
      "Next.js projects Nepal",
      "React projects Nepal",
      "Node.js backend projects Nepal",
    ],
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
  twitter: {
    card: "summary_large_image",
    title: "Project Details - Bleeding Tech",
    description:
      "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions.",
    images: ["/og.jpg"],
  },
  authors: [{ name: "Bleeding Tech Team", url: "https://bleedingtech.com.np" }],
  category: "Technology",
};

export default function Page() {
  return(
    <>
     <Script
        id="project-details-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProjectDetails",
            headline: "Project Details",
            description:
              "Explore detailed information about our web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech.",
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
              "@id": "https://bleedingtech.com.np/project-details",
            },
          }),
        }}
      />
      <ProjectDetails />;
    </>
  ) 
}

