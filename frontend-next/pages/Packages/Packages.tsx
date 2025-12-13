import {lazy} from 'react'
const CommonBanner = lazy(() => import('../../components/common/CommonBanner/CommonBanner'));
const ContactCTA = lazy(() => import('../../components/common/ContactCTA/ContactCTA'));
const PackageIntro = lazy(() => import('../../components/section/PackageComponents/PackageIntro'));
const DetailedPackage = lazy(() => import('../../components/section/PackageComponents/DetailedPackage'));
const FAQ = lazy(() => import('../../components/section/HomeComponents/FAQ/FAQ'));


type FaqItem = { question: string; answer: string };

const Packages = ({ packageFaqs }: { packageFaqs: FaqItem[] }) => {
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