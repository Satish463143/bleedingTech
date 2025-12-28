import AboutUs from "@/page-components/AboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bleeding Tech - a leading IT company in Nepal specializing in web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/about-us",
    siteName: "Bleeding Tech",
    title: "About Us - Bleeding Tech",
    description:
      "Learn about Bleeding Tech - a leading IT company in Nepal specializing in web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Bleeding Tech",
    description:
      "Learn about Bleeding Tech - a leading IT company in Nepal specializing in web development, mobile apps, SEO optimization, UI/UX design, digital marketing, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <AboutUs />;
}

