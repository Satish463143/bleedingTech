import BlogsDetails from "@/page-components/BlogsDetails/BlogsDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Detail - Bleeding Tech",
  description:
    "Read our blogs on web development, mobile apps, SEO optimization, UI/UX design, and custom systems by Bleeding Tech.",
};

export default function Page() {
  return <BlogsDetails />;
}

