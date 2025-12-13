"use client";

import dynamic from "next/dynamic";

const CommonBanner = dynamic(() => import("../../components/common/CommonBanner/CommonBanner"));
const MiniPortfolioPreview = dynamic(() => import("../../components/section/ServiceComponents/MiniPortfolioPreview"));
const ServiceOverview = dynamic(() => import("../../components/section/ServiceComponents/ServiceOverview"));
const DetailedServiceSection = dynamic(() => import("../../components/section/ServiceComponents/DetailedServiceSection"));
const WhyChooseUs = dynamic(() => import("../../components/section/ServiceComponents/WhyChooseUs"));
const Workflow = dynamic(() => import("../../components/section/ServiceComponents/Workflow"));
const ContactCTA = dynamic(() => import("../../components/common/ContactCTA/ContactCTA"));
const FAQ = dynamic(() => import("../../components/section/HomeComponents/FAQ/FAQ"));

type FaqItem = { question: string; answer: string };

export default function Services({ serviceFaqs }: { serviceFaqs: FaqItem[] }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  return (
    <div className="min-h-screen">
      <CommonBanner
        title="Our Services"
        slogan="Engineering digital excellence for every industry."
        breadcrumbs={breadcrumbs}
      />

      <DetailedServiceSection />
      <ServiceOverview />
      <WhyChooseUs />
      <Workflow />
      <MiniPortfolioPreview />

      <FAQ
        customFaqs={serviceFaqs}
        title="Service FAQs"
        subhead="Questions"
        headTitle="About Services"
        description="Common questions about our services, billing, and customization options."
      />

      <ContactCTA />
    </div>
  );
}
