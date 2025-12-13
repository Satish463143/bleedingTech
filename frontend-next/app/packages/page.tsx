import Packages from "@/pages/Packages/Packages";
import type { Metadata } from "next";
import { buildFaqJsonLd } from "@/lib/faqJsonLd";
import Script from "next/script";
import { packageFaqs } from "@/src/data/data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/packages" },
};



const faqJsonLd = buildFaqJsonLd(packageFaqs);

export default function Page() {
  return <>
      <Script
        id="packages-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Packages packageFaqs={packageFaqs} />
  </>
  ;
}
