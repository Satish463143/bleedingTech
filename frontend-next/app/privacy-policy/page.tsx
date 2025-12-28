import type { Metadata } from "next";
import PrivacyPolicy from "@/page-components/PrivcyPolicy/PrivcyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Bleeding Tech's privacy policy to understand how we collect, use, and protect your personal information when you use our web development, app development, and digital services.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/privacy-policy",
    siteName: "Bleeding Tech",
    title: "Privacy Policy - Bleeding Tech",
    description:
      "Read Bleeding Tech's privacy policy to understand how we collect, use, and protect your personal information when you use our web development, app development, and digital services.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Bleeding Tech",
    description:
      "Read Bleeding Tech's privacy policy to understand how we collect, use, and protect your personal information.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
