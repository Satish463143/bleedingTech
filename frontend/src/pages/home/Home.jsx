import React from 'react'
import Banner from '../../components/HomeComponents/Banner/Banner'
import Services from '../../components/HomeComponents/Services/Services'
import Portfolio from '../../components/HomeComponents/Portfolio/Portfolio'
import Testimonal from '../../components/HomeComponents/Testimonal/Testimonal'
import Clients from '../../components/HomeComponents/Clients/Clients'
import OurTeam from '../../components/HomeComponents/OurTeam/OurTeam'
import WhyUs from '../../components/HomeComponents/WhyUs/WhyUs'
import FAQ from '../../components/HomeComponents/FAQ/FAQ'

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