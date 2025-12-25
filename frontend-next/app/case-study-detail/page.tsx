import CaseStudyDetail from "@/page-components/CaseStudyDetail/CaseStudyDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Detail - Bleeding Tech",
  description:
    "Read our case studies on web development, mobile apps, SEO optimization, UI/UX design, and custom systems by Bleeding Tech.",
};

export default function Page() {
  return <CaseStudyDetail />;
}

