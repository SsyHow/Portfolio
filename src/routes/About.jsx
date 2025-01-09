import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import BackImg2 from '../components/BackImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="About" text="all things about me" />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About
