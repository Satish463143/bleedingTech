import {lazy} from 'react'
const Banner = lazy(() => import('../../components/section/HomeComponents/Banner/Banner'));
const Services = lazy(() => import('../../components/section/HomeComponents/Services/Services'));
const Portfolio = lazy(() => import('../../components/section/HomeComponents/Portfolio/Portfolio'));
const Testimonal = lazy(() => import('../../components/section/HomeComponents/Testimonal/Testimonal'));
const Clients = lazy(() => import('../../components/section/HomeComponents/Clients/Clients'));
const OurTeam = lazy(() => import('../../components/section/HomeComponents/OurTeam/OurTeam'));
const WhyUs = lazy(() => import('../../components/section/HomeComponents/WhyUs/WhyUs'));
const FAQ = lazy(() => import('../../components/section/HomeComponents/FAQ/FAQ'));

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Testimonal/>
      <Clients/>
      <OurTeam/>
      <WhyUs/>
      <FAQ/>
    </div>
  )
}

export default Home