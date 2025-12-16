"use client"
import React,{useState} from 'react'
import Navbar from '../../components/CMS/Navbar/Navbar'
import './CMSLayout.css'
import TopNav from '../../components/CMS/TopNav/TopNav'
import MobileNav from '../../components/CMS/MobileNav/MobileNav'
import CheckPermission from '../../src/config/rbac.config'

const CMSLayout = ({children}: {children: React.ReactNode}) => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  // this is the cmslayout file 
  return (
    <div className='body_grid'>
      <CheckPermission allowedBy="admin">
        <div><Navbar/></div>         
        <div className='body_box'> 
          <TopNav isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>
          <MobileNav isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>              
          {children}
        </div> 
      </CheckPermission>
    </div>
  )
}

export default CMSLayout