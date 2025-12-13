import CaseStudyDetail from "@/pages/CaseStudyDetail/CaseStudyDetail";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; id: string };
}): Promise<Metadata> {
  return {
    title: "Case Study Detail - Bleeding Tech",
    description:
      "Read our case studies on web development, mobile apps, SEO optimization, UI/UX design, and custom systems by Bleeding Tech.",
    alternates: {
      canonical: `/case-study-detail/${params.slug}/${params.id}`,
    },
  };
}

export default function Page() {
  return <CaseStudyDetail />;
}
