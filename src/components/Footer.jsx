import "./Footer.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Currently live in Melbourne</p>
                        <p>open to relocation</p>
                    </div>

                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    0-468-948-677
                    </h4>
                    
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    howrdw.work@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>This is Hao</p>
                <div className="social">
                    <Link to="https://www.linkedin.com/in/hao-howard-wang-4836641bb/">
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </Link>
                    <Link to="https://github.com/SsyHow">
                    <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </Link>
                    <Link to="https://leetcode.com/u/haowang32123/">
                    <SiLeetcode size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </Link>
                    <Link to="https://codeforces.com/profile/SsyHow">
                    <SiCodeforces size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </Link>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Footer
