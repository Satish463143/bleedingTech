import React from 'react'
import Navbar from '../../common/Navbar/Navbar'
import Footer from '../../common/Footer/Footer'
import BottomNav from '../../common/BottomNav/BottomNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar />
            <Outlet />
        <Footer />
        <BottomNav />
    </div>
  )
}

export default Layout