import Blogs from "@/page-components/Blogs/Blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions from Bleeding Tech experts.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "https://bleedingtech.com.np/blogs",
    siteName: "Bleeding Tech",
    title: "Blogs - Bleeding Tech",
    description:
      "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions from Bleeding Tech experts.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Bleeding Tech",
    description:
      "Read insightful blogs on web development, mobile app development, SEO strategies, UI/UX design trends, digital marketing tips, and custom software solutions.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <Blogs />;
}
