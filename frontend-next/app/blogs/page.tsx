import Blogs from "@/page-components/Blogs/Blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/blogs" },
};


export default function Page() {
  return <Blogs />;
}
