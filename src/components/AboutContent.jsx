import "./AboutContent.css"

import React from 'react'
import {Link} from "react-router-dom"
import img1 from "../assets/coder.jpg"
const AboutContent = () => {
  return <div className="about">
    <div className="left">
    {/* <h1>Who am I</h1> */}
    <p>Hi, my name is Hao Wang. I hold a Master’s degree in Information Technology from the University of New South Wales and a Bachelor’s degree in Mathematics from the University of Waterloo. </p>
    <p>I am passionate about the intersection of data, technology, programming and mathematics, with strong problem-solving skills and a drive to explore innovative tools and solutions. I believe in leveraging technology to foster innovation and create value for individuals and teams.</p>
    
    <Link to="/contact">
    <button className="btn">Contact</button>
    </Link>
    </div>

    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={img1} alt="true" className="img"/>
        </div>
        <div className="img-stack bottom">
            <img src={img1} alt="true" className="img"/>
        </div>
    </div>
    </div>
  </div>
}

export default AboutContent
