export const dynamic = "force-static";
import type { Metadata } from "next";
import PrivacyPolicy from "@/page-components/PrivcyPolicy/PrivcyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Bleeding Tech's privacy policy to understand how we collect, use, and protect your personal information when you use our web development, app development, and digital services.",
  keywords:[
    "privacy policy",
    "privacy policy Nepal",
    "privacy policy Bleeding Tech",
    "privacy policy website development",
    "privacy policy mobile app development",
    "privacy policy digital marketing",
    "privacy policy custom software solutions",
    "privacy policy IT company Nepal",
    "privacy policy UI/UX design",
    "privacy policy mobile app development Nepal",
    "privacy policy web development Nepal",
    "privacy policy software development Nepal",
    "privacy policy MERN stack development Nepal",
    "privacy policy Next.js development Nepal",
  ],
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
  authors: [{ name: "Bleeding Tech Team", url: "https://bleedingtech.com.np" }],
  category: "Technology",
};

export default function Page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
