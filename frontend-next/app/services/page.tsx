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
