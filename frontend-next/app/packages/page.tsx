export const dynamic = "force-static";
import Packages from "@/page-components/Packages/Packages";
import type { Metadata } from "next";
import { buildFaqJsonLd } from "@/lib/faqJsonLd";
import Script from "next/script";
import { packageFaqs } from "@/src/data/data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore affordable IT packages for web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions. Tailored packages to fit your business needs.",
  alternates: { canonical: "/packages" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/packages",
    siteName: "Bleeding Tech",
    title: "Packages - Bleeding Tech",
    description:
      "Explore affordable IT packages for web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions. Tailored packages to fit your business needs.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages - Bleeding Tech",
    description:
      "Explore affordable IT packages for web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

const faqJsonLd = buildFaqJsonLd(packageFaqs);

export default function Page() {
  return (
    <>
      <Script
        id="packages-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Packages packageFaqs={packageFaqs} />
    </>
  );
}
