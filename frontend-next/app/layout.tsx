import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import LayoutWrapper from "@/components/common/LayoutWrapper/LayoutWrapper";
import ReduxProvider from "@/components/common/ReduxProvider/ReduxProvider";

import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://bleedingtech.com.np"),
  title: {
    default: "Bleeding Tech | Web, App, SEO, UI/UX & Digital Marketing in Nepal",
    template: "%s | Bleeding Tech",
  },
  description:
    "Bleeding Tech is a Nepal-based digital agency providing web development, mobile apps, SEO, UI/UX, digital marketing, ERP, billing systems, and custom software solutions.",
  keywords: [
    "Bleeding",
    "Bleeding Tech",
    "Web Development Nepal",
    "Software Company Nepal",
    "Digital Agency Nepal",
    "SEO Services Nepal",
    "UI UX Design Nepal",
    "Mobile App Development Nepal",
    "ERP System Nepal",
    "Billing Software Nepal",
    "Custom Software Development",
    "Bleeding Tech Nepal",
    "Bleeding Tech IT Company",
    "Bleeding Tech Software Company",
    "Bleeding Tech Digital Agency",
    "IT Company Nepal",
    "Software Company Nepal",
    "Web Development Nepal",
    "Mobile App Development Nepal",
    "SEO Company Nepal",
    "UI UX Design Nepal",
    "Digital Marketing Nepal",
    "Custom Software Nepal",
    "Bleeding Tech Nepal",
    "Tech Company in Nepal",
    "Best IT Company in Nepal",
    "Leading Software Company Nepal",
    "Nepal IT Services",
    "AI Powered Web Applications",
    "AI Integration Services",
    "Chatbot Development",
    "OpenAI Integration",
    "Gemini AI Integration",
  ],
  alternates: {
    canonical: "https://bleedingtech.com.np",
  },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np",
    siteName: "Bleeding Tech",
    title: "Bleeding Tech",
    description:
      "Web, mobile, SEO, UI/UX, digital marketing, and custom software solutions.",
    images: [
      {
        url: "https://bleedingtech.com.np/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://bleedingtech.com.np/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bleeding Tech",
  url: "https://bleedingtech.com.np",
  logo: "https://bleedingtech.com.np/logo.png",
  description:
    "Bleeding Tech is a full-service digital agency offering web development, mobile apps, SEO, UI/UX, digital marketing, and custom enterprise solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Nepal",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  sameAs: [
    "https://www.linkedin.com/in/bleeding-tech-bb96323a2/",
    "https://www.instagram.com/bleedingtech/",
    "https://www.facebook.com/bleedingtech/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Nepali"],
    url: "https://bleedingtech.com.np/contact",
  },
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bleeding Tech",
  url: "https://bleedingtech.com.np",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bleedingtech.com.np/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preconnect" href="https://bleeding-tech.s3.eu-north-1.amazonaws.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" as="style"/>
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ReduxProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ReduxProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
