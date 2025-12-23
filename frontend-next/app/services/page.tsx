import type { Metadata } from "next";
import Script from "next/script";
import Services from "@/page-components/Services/Services";
import { serviceFaqs } from "@/src/data/data";
import { buildFaqJsonLd } from "@/lib/faqJsonLd";


// Your page metadata (optional)
export const metadata: Metadata = {
  title: "Services - Bleeding Tech",
  description:
    "Web & mobile app development, SEO, UI/UX, ads, and custom systems. Packages and custom services by Bleeding Tech.",
  alternates: { canonical: "/services" },
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
