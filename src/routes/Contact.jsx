import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import BackImg2 from '../components/BackImg2'
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="Contact" text="Lets have a chat" />
      <Form />
       <Footer/>
    </div>
  )
}

export default Contact
