import ContactUs from "@/page-components/ContactUs/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bleeding Tech for web development, mobile app development, SEO services, UI/UX design, digital marketing, and custom software solutions. Contact us today!",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/contact-us",
    siteName: "Bleeding Tech",
    title: "Contact Us - Bleeding Tech",
    description:
      "Get in touch with Bleeding Tech for web development, mobile app development, SEO services, UI/UX design, digital marketing, and custom software solutions. Contact us today!",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Bleeding Tech",
    description:
      "Get in touch with Bleeding Tech for web development, mobile app development, SEO services, UI/UX design, digital marketing, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <ContactUs />;
}
