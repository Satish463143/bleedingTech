import React from 'react'
import CommonBanner from '../../common/CommonBanner/CommonBanner';
import ContactCTA from '../../common/ContactCTA/ContactCTA';
import OurTeam from '../../components/HomeComponents/OurTeam/OurTeam';
import WhoWeAre from '../../components/AboutComponents/WhoWeAre';
import MissionVision from '../../components/AboutComponents/Mission&Vision';
import Values from '../../components/AboutComponents/Values';
import WorkingProcess from '../../components/AboutComponents/WorkingProcess';
import Achievements from '../../components/AboutComponents/Achievements';

const AboutUs = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CommonBanner
        title="About Us"
        slogan="Discover the team, vision, and values that drive Bleeding Tech."
        breadcrumbs={breadcrumbs}
      />
      <WhoWeAre />
      <MissionVision />
      <Values />
      <OurTeam/>
      <WorkingProcess />
      <Achievements />      
      <ContactCTA />
    </div>
  )
}

export default AboutUs