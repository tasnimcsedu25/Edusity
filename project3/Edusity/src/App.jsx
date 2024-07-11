import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title' 
const App=()=> {
  return (
    <div>
    <Navbar/>
    <Hero/>
  <div className="container">
    <Title subTitle='Our program' title='What we offer'/>
    <Programs/>
  </div>
   
    </div>
  )
}

export default App