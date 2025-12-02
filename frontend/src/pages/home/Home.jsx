import React from 'react'
import Banner from '../../components/HomeComponents/Banner/Banner'
import Services from '../../components/HomeComponents/Services/Services'
import Portfolio from '../../components/HomeComponents/Portfolio/Portfolio'
import Testimonal from '../../components/HomeComponents/Testimonal/Testimonal'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Testimonal/>
    </div>
  )
}

export default Home