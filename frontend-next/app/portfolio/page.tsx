import Portfolio from "@/pages/Portfolio/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/portfolio" },
};


export default function Page() {
  return <Portfolio />;
}
