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
  keywords: [
    "web development packages",
    "software development packages",
    "SEO packages Nepal",
    "digital marketing packages",
    "custom software packages",
    "website development packages Nepal",
    "React website development pricing",
    "Next.js development packages",
    "startup website packages",
    "enterprise software packages",
    "UI UX design packages",
    "IT service packages Nepal",
    "affordable web development packages",
    "how much does a website cost in Nepal",
    "what is included in web development package",
    "which package is best for startups",
    "website maintenance cost Nepal",
    "SEO package cost Nepal",
  ],
    alternates: { canonical: "https://bleedingtech.com.np/packages" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/packages",
    siteName: "Bleeding Tech",
    title: "Packages - Bleeding Tech",
    description:
      "Explore affordable IT packages for web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions. Tailored packages to fit your business needs.",
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
    title: "Packages - Bleeding Tech",
    description:
      "Explore affordable IT packages for web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  const faqJsonLd = buildFaqJsonLd(packageFaqs);
  return (
    <>
      <Script
          id="packages-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      <Packages packageFaqs={packageFaqs} />
    </>
  );
}
