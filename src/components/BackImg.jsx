import './BackImg.css'

import React, { useEffect, useRef } from 'react'
import IntroImg from "../assets/coder.jpg"
import {Link} from 'react-router-dom'
import Typed from 'typed.js';


const BackImg = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings : ["Developer", "Fast Learner", "Problem Solver"],
      typeSpeed : 90,
      backSpeed : 50,
      loop : true,
    }

    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy();
    }
  },[])

  
  return (<div className="back">
    <div className="mask">
        <img className='into-img' src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
      <p>Hi, I am Hao</p>
      <h1>
      A <span ref={typedRef}></span>
      </h1>
      <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>)
}

export default BackImg
