export const dynamic = "force-static";
import type { Metadata } from "next";
import Script from "next/script";
import Services from "@/page-components/Services/Services";
import { serviceFaqs } from "@/src/data/data";
import { buildFaqJsonLd } from "@/lib/faqJsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive IT services including web & mobile app development, SEO optimization, UI/UX design, digital marketing, Google/Facebook ads, and custom software solutions like billing systems & ERP. Packages and custom services available.",
  
    keywords: [
      "web development services",
      "mobile app development services",
      "SEO optimization services",
      "UI/UX design services",
      "digital marketing services",
      "Google/Facebook ads services",
      "custom software solutions services",
      "IT company Nepal services",
      "UI UX design services",
      "mobile app development services Nepal",
      "web development services Nepal",
      "software development services Nepal",
      "MERN stack services Nepal",
      "Next.js services Nepal",
      "React services Nepal",
      "Node.js backend services Nepal",
    ],
    alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/services",
    siteName: "Bleeding Tech",
    title: "Services - Bleeding Tech",
    description:
      "Comprehensive IT services including web & mobile app development, SEO optimization, UI/UX design, digital marketing, Google/Facebook ads, and custom software solutions.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Bleeding Tech",
    description:
      "Comprehensive IT services including web & mobile app development, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
    images: ["/og.jpg"],
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
  authors: [{ name: "Bleeding Tech Team", url: "https://bleedingtech.com.np" }],
  category: "Technology",
};

export default function Page() {
  const faqJsonLd = buildFaqJsonLd(serviceFaqs);

  return (
    <>
      {/* ✅ JSON-LD must be present in the HTML */}
      <Script
        id="services-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Services serviceFaqs={serviceFaqs} />
    </>
  );
}
