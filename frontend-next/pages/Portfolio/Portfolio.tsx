import {lazy} from 'react'
const CommonBanner = lazy(() => import('../../components/common/CommonBanner/CommonBanner'));
const ContactCTA = lazy(() => import('../../components/common/ContactCTA/ContactCTA'));
const FeaturedProject = lazy(() => import('../../components/section/PortfolioComponents/FeaturedProject'));
const FullProject = lazy(() => import('../../components/section/PortfolioComponents/FullProject'));
const PortfolioOverview = lazy(() => import('../../components/section/PortfolioComponents/PortfolioOverview'));
const TechStack = lazy(() => import('../../components/section/PortfolioComponents/TechStack'));
const Testimonal = lazy(() => import('../../components/section/PortfolioComponents/Testimonal'));
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