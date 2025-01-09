import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import BackImg2 from '../components/BackImg2'
import Works from '../components/Works'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="Projects" text="Some of My Work" />
      <Works/>
      <Footer/>
    </div>
  )
}

export default Projects
