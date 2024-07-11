import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} className='logo'/>
      
    <ul>
        <li>home</li>
        <li>Program</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us </button></li>
    </ul>
    </nav>
  )
}

export default Navbar
