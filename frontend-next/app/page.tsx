import Home from "@/page-components/home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bleeding Tech - Web, App, SEO, UI/UX & Digital Marketing",
  description:
    "Bleeding Tech builds modern websites, mobile apps, UI/UX, SEO, and digital marketing campaigns. Get packages or custom systems like billing & ERP.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np",
    siteName: "Bleeding Tech",
    title: "Bleeding Tech - Web, App, SEO, UI/UX & Digital Marketing",
    description:
      "Bleeding Tech builds modern websites, mobile apps, UI/UX, SEO, and digital marketing campaigns. Get packages or custom systems like billing & ERP.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bleeding Tech - Web, App, SEO, UI/UX & Digital Marketing",
    description:
      "Bleeding Tech builds modern websites, mobile apps, UI/UX, SEO, and digital marketing campaigns. Get packages or custom systems like billing & ERP.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <Home />;
}
