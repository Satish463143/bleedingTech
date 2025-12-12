import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';
import PackageIntro from '../../components/PackageComponents/PackageIntro';
import DetailedPackage from '../../components/PackageComponents/DetailedPackage';
import FAQ from '../../components/HomeComponents/FAQ/FAQ';

// Package-specific FAQ content
const packageFaqs = [
  {
    question: "Which package is best for my business?",
    answer:
      "The best package depends on your current stage — whether you're building, growing, or optimizing. Our plans are structured to support startups, scaling businesses, and established brands. If you're unsure, we'll evaluate your goals and recommend the ideal fit.",
  },
  {
    question: "Can I customize a package based on my needs?",
    answer:
      "Yes. All packages are flexible. You can add, remove, or adjust services such as SEO, app development, ads management, or design. We also offer fully custom packages if your requirements are unique.",
  },
  {
    question: "Do you offer monthly or yearly billing options?",
    answer:
      "Yes. Packages can be billed monthly or annually. Yearly billing includes additional benefits such as priority support, discounted rates, and extended maintenance coverage.",
  },
  {
    question: "Are design, development, and marketing included together?",
    answer:
      "Some packages combine multiple services, while others focus on specific areas. Full-stack bundles (Web + App + SEO + Ads) are available for businesses wanting an all-in-one digital solution.",
  },
  {
    question: "What happens if I need more features later?",
    answer:
      "You can upgrade, downgrade, or extend your package anytime. As your business grows, we adjust your plan so it remains aligned with your goals and performance needs.",
  },
];

const Packages = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Packages" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Our Packages"
        slogan="Flexible plans engineered for every stage of digital growth."
        breadcrumbs={breadcrumbs}
      />
      <PackageIntro />
      <DetailedPackage />
      <FAQ
        customFaqs={packageFaqs}
        title="Package FAQs"
        subhead="Questions"
        headTitle="About Pricing"
        description="Common questions about our packages, billing, and customization options."
      />
      <ContactCTA />
    </div>
  )
}

export default Packages