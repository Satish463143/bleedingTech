export const dynamic = "force-static";

import AboutUs from "@/page-components/AboutUs/AboutUs";
import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://bleedingtech.com.np";

export const metadata: Metadata = {
  title: "About Bleeding Tech | Leading IT & Software Company in Nepal",
  description:
    "Learn about Bleeding Tech, a Nepal-based IT company providing web development, mobile apps, SEO, UI/UX, digital marketing, ERP systems, and custom software solutions worldwide.",
  keywords: [
    "Bleeding Tech",
    "IT Company Nepal",
    "Software Company Nepal",
    "Web Development Nepal",
    "Mobile App Development Nepal",
    "SEO Company Nepal",
    "UI UX Design Nepal",
    "Digital Marketing Nepal",
    "Custom Software Nepal",
    "Bleeding Tech Nepal",
    "Bleeding Tech IT Company",
    "Bleeding Tech Software Company",
    "Bleeding Tech Digital Agency",
  ],
  alternates: {
    canonical: `${siteUrl}/about-us`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/about-us`,
    siteName: "Bleeding Tech",
    title: "About Bleeding Tech",
    description:
      "Bleeding Tech is a Nepal-based digital agency delivering web, mobile, SEO, UI/UX, and custom software solutions.",
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "About Bleeding Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bleeding Tech",
    description:
      "Learn about Bleeding Tech, a leading IT company in Nepal delivering scalable digital solutions.",
    images: [`${siteUrl}/og.jpg`],
  },
};

export default function Page() {
  return (
    <>
      {/* AboutPage Schema */}
      <Script
        id="aboutpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Bleeding Tech",
            "url": "https://bleedingtech.com.np/about-us",
            "description":
              "About Bleeding Tech – a full-service digital agency providing web development, mobile apps, SEO, UI/UX, and custom software solutions.",
            "publisher": {
              "@type": "Organization",
              "name": "Bleeding Tech",
              "url": "https://bleedingtech.com.np",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bleedingtech.com.np/logo.png",
              },
            },
          }),
        }}
      />

      <AboutUs />
    </>
  );
}
