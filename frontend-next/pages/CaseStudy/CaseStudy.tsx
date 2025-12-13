import { lazy } from 'react';
const CommonBanner = lazy(() => import('../../components/common/CommonBanner/CommonBanner'));
const ContactCTA = lazy(() => import('../../components/common/ContactCTA/ContactCTA'));
const Overview = lazy(() => import('../../components/section/CaseStudyComponenet/Overview'));
const CaseStudyList = lazy(() => import('../../components/section/CaseStudyComponenet/CaseStudyList'));

const CaseStudy = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Case Studies"
        slogan="See how our clients have achieved success with our solutions."
        breadcrumbs={breadcrumbs}
      />
      
      {/* Overview Section */}
      <Overview />
      
      {/* Case Studies List */}
      <CaseStudyList />
      
      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}

export default CaseStudy
