import "./Form.css"

import React, { useRef, useState} from 'react'
import emailjs from "emailjs-com"

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    

    emailjs
      .sendForm(
        "service_howrdw",
        "template_vjzg8ua",
        form.current,
        "l-yd9PBZBIyH9JIe3"
      )
      .then(
        (result) => {
          console.log('1')
          setStatus("Message sent successfully")
        },
        (error) => {
          console.log('0')
          setStatus("Fail to send message")
        }
      )

      e.target.reset()
  }

  return <div className="form">
    <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name" required></input>
        <label>Email</label>
        <input type="email"  name="email" required></input>
        <label>Subject</label>
        <input type="text"  name="subject" required></input>
        <label>Message</label>
        <textarea row="6" name="message" placeholder="Type your message here" required/>
        <button className="btn">Submit</button>   
        {status && <p>{status}</p>}     
    </form>

  </div>
}

export default Form
