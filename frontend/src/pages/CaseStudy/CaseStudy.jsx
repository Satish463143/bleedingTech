import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';

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
        slogan="See how our clients have achieved success with our services."
        breadcrumbs={breadcrumbs}
      />
       <ContactCTA />
    </div>
  )
}

export default CaseStudy