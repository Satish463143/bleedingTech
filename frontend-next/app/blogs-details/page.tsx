import BlogsDetails from "@/page-components/BlogsDetails/BlogsDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description:
    "Read detailed articles and insights on web development, mobile apps, SEO optimization, UI/UX design, digital marketing strategies, and custom software solutions by Bleeding Tech experts.",
  alternates: { canonical: "/blogs-details" },
  openGraph: {
    type: "article",
    url: "https://bleedingtech.com.np/blogs-details",
    siteName: "Bleeding Tech",
    title: "Blog Details - Bleeding Tech",
    description:
      "Read detailed articles and insights on web development, mobile apps, SEO optimization, UI/UX design, digital marketing strategies, and custom software solutions.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Details - Bleeding Tech",
    description:
      "Read detailed articles and insights on web development, mobile apps, SEO optimization, UI/UX design, and digital marketing strategies.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <BlogsDetails />;
}

