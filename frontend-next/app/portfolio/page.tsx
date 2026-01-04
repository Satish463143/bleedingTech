export const dynamic = "force-static";
import Portfolio from "@/page-components/Portfolio/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of successful web development projects, mobile applications, SEO campaigns, UI/UX designs, and custom software solutions delivered by Bleeding Tech. See our work in action.",
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
