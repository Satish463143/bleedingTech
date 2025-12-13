import CaseStudies from "@/pages/CaseStudy/CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/case-studies" },
};


export default function Page() {
  return <CaseStudies />;
}
