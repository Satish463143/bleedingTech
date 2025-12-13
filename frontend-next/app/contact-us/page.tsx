import ContactUs from "@/pages/ContactUs/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Web development, mobile apps, SEO optimization, UI/UX design, ads and custom systems by Bleeding Tech.",
  alternates: { canonical: "/contact-us" },
};


export default function Page() {
  return <ContactUs />;
}
