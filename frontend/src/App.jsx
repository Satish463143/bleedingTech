import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/layout'
import Home from './pages/home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Blogs from './pages/Blogs/Blogs'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import Packages from './pages/Packages/Packages'
import CaseStudy from './pages/CaseStudy/CaseStudy'
import CaseStudyDetail from './pages/CaseStudyDetail/CaseStudyDetail'
import BlogsDetails from './pages/BlogsDetails/BlogsDetails'

const App = () => {
  const pathname = useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname.pathname])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/blogs-details/:slug/:id' element={<BlogsDetails />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/packages' element={<Packages />}/>
          <Route path='/case-studies' element={<CaseStudy />}/>
          <Route path='/case-study-detail/:slug/:id' element={<CaseStudyDetail />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App