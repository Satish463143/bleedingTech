export const dynamic = "force-static";
import CaseStudyDetail from "@/pages/CaseStudyDetail/CaseStudyDetail";
import type { Metadata } from "next";
import { caseStudies } from "../../../../src/data/data";

// Generate static params for all case studies at build time
export async function generateStaticParams() {
  return caseStudies.map((study: any) => ({
    slug: study.slug,
    id: String(study.id),
  }));
}

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

export default function Page () {
  return <CaseStudyDetail />;
}
