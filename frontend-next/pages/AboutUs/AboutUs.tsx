"use client";
import { lazy } from 'react';
const CommonBanner = lazy(() => import('../../components/common/CommonBanner/CommonBanner'));
const ContactCTA = lazy(() => import('../../components/common/ContactCTA/ContactCTA'));
const OurTeam = lazy(() => import('../../components/section/HomeComponents/OurTeam/OurTeam'));
const WhoWeAre = lazy(() => import('../../components/section/AboutComponents/WhoWeAre'));
const MissionVision = lazy(() => import('../../components/section/AboutComponents/Mission&Vision'));
const Values = lazy(() => import('../../components/section/AboutComponents/Values'));
const WorkingProcess = lazy(() => import('../../components/section/AboutComponents/WorkingProcess'));
const Achievements = lazy(() => import('../../components/section/AboutComponents/Achievements'));

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