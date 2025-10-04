import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaMailBulk, FaPhone,FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size ={20} style = {{color :
                "#fff",marginRight : "2rem"}}/>
                <div>
                  <p>123 housing Society</p>
                  <p>Pakistan.</p>
                </div>
            </div> 
            <div className="phone">
           <h4> <FaPhone size ={20} style = {{color :
                "#fff",marginRight : "2rem"}}/>
                0321-9629775</h4>
            </div>
            <div className="email">
           <h4> <FaMailBulk size ={20} style = {{color :
                "#fff",marginRight : "2rem"}}/>
                aliyasir2346@gmail.com</h4>
            </div>
        </div>
        <div className="right">
          <h4>About The company</h4>
          <p>This is me Ali yasir Im a Front-End React developer
            I enjoy discussing new projects and design Challenges
          </p>
          <div className="social">
          <FaFacebook size ={30} style = {{color :
                "#fff",marginRight : "1rem"}}/>
           <FaTwitter size ={30} style = {{color :
                "#fff",marginRight : "1rem"}}/>
            <FaLinkedin size ={30} style = {{color :
                "#fff",marginRight : "1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
