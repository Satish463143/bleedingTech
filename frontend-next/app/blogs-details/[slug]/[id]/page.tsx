import BlogsDetails from "@/pages/BlogsDetails/BlogsDetails";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; id: string };
}): Promise<Metadata> {
  return {
    title: "Blog Details - Bleeding Tech",
    description:
      "Read our latest insights on web development, mobile apps, SEO optimization, UI/UX design, and custom systems by Bleeding Tech.",
    alternates: {
      canonical: `/blogs-details/${params.slug}/${params.id}`,
    },
  };
}

export default function Page() {
  return <BlogsDetails />;
}
