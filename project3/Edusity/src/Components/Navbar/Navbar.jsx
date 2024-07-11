import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
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
