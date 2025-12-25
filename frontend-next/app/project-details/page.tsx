import ProjectDetails from "@/page-components/ProjectDetails/ProjectDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Detail - Bleeding Tech",
  description:
    "Read our projects on web development, mobile apps, SEO optimization, UI/UX design, and custom systems by Bleeding Tech.",
};

export default function Page() {
  return <ProjectDetails />;
}

