import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import MiniPortfolioPreview from '../../components/ServiceComponents/MiniPortfolioPreview';
import ServiceOverview from '../../components/ServiceComponents/ServiceOverview';
import DetailedServiceSection from '../../components/ServiceComponents/DetailedServiceSection';
import WhyChooseUs from '../../components/ServiceComponents/WhyChooseUs';
import Workflow from '../../components/ServiceComponents/Workflow';
import ContactCTA from '../../common/ContactCTA/ContactCTA';

const Services = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
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
      <ContactCTA />
    </div>
  )
}

export default Services