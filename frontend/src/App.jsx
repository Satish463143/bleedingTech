import React from 'react'
import Layout from './pages/layout/layout'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Blogs from './pages/Blogs/Blogs'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import Packages from './pages/Packages/Packages'
import Clients from './pages/Clients/Clients'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/packages' element={<Packages />}/>
          <Route path='/clients' element={<Clients />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App