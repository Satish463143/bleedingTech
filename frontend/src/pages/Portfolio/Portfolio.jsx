import React from 'react'
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import ContactCTA from '../../common/ContactCTA/ContactCTA';
import FeaturedProject from '../../components/PortfolioComponents/FeaturedProject';
import FullProject from '../../components/PortfolioComponents/FullProject';
import PortfolioOverview from '../../components/PortfolioComponents/PortfolioOverview';
import TechStack from '../../components/PortfolioComponents/TechStack';
import Testimonal from '../../components/PortfolioComponents/Testimonal';
const Portfolio = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="Our Portfolio"
        slogan="Explore our collection of successful projects and digital solutions."
        breadcrumbs={breadcrumbs}
      />
      <PortfolioOverview />
      <FullProject />
      <FeaturedProject />     
      <TechStack />
      <Testimonal />
      <ContactCTA />
    </div>
  )
}

export default Portfolio