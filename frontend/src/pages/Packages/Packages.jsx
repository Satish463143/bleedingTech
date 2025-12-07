import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';



const Packages = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Packages" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Our Services"
        slogan="Engineering digital excellence for every industry."
        breadcrumbs={breadcrumbs}
      />
      <ContactCTA />
    </div>
  )
}

export default Packages