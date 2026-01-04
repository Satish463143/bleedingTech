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
    default: "Bleeding Tech - Web, App, SEO, UI/UX & Digital Marketing",
    template: "%s | Bleeding Tech",
  },
  description:
    "Bleeding Tech builds modern websites, mobile apps, UI/UX, SEO, and digital marketing campaigns. Get packages or custom systems like billing & ERP.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np",
    siteName: "Bleeding Tech",
    title: "Bleeding Tech",
    description:
      "Web development, mobile apps, SEO, UI/UX, ads, and custom systems.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bleeding Tech",
  url: "https://bleedingtech.com.np",
  logo: "https://bleedingtech.com.np/logo.png",
  sameAs: [
    // add your real links
    "https://www.facebook.com/yourpage",
    "https://www.instagram.com/yourpage",
    "https://www.linkedin.com/in/bleeding-tech-bb96323a2/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://bleedingtech.com.np/contact-us",
      availableLanguage: ["English", "Nepali"],
    },
  ],
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
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
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
