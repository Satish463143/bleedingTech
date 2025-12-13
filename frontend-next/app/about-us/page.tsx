import AboutUs from "@/pages/AboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/about-us" },
};


export default function Page() {
  return <AboutUs />;
}
