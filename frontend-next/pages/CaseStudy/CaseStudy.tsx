import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';
import Overview from '../../components/CaseStudyComponenet/Overview';
import CaseStudyList from '../../components/CaseStudyComponenet/CaseStudyList';

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
