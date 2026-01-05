export const dynamic = "force-static";
import Portfolio from "@/page-components/Portfolio/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of successful web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech. See our work in action.",
  
    keywords: [
      "web development portfolio",
      "software development projects",
      "MERN stack projects",
      "Next.js projects",
      "React portfolio",
      "Node.js backend projects",
      "custom software solutions",
      "IT company portfolio Nepal",
      "UI UX design projects",
      "mobile app development portfolio",
      "web development portfolio Nepal",
      "software development portfolio Nepal",
      "MERN stack portfolio Nepal",
      "Next.js portfolio Nepal",
      "React portfolio Nepal",
      "Node.js backend portfolio Nepal",
      "custom software solutions portfolio Nepal",
      "IT company portfolio Nepal",
      "UI UX design portfolio Nepal",
    ],
    alternates: { canonical: "/portfolio" },

  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/portfolio",
    siteName: "Bleeding Tech",
    title: "Portfolio - Bleeding Tech",
    description:
      "View our portfolio of successful web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech.",
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
    title: "Portfolio - Bleeding Tech",
    description:
      "View our portfolio of successful web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <Portfolio />;
}
