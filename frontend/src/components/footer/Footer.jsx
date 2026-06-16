import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            {/* <img src={assets.logo} alt="" /> */}
            <h1>FeastyBites</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum adipisci doloribus alias dolorem consectetur vel nulla ullam, beatae eaque! Aut sunt expedita eveniet quisquam in illo! Aut, saepe eveniet.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
             <h2>COMPANY</h2>
             <ul>
                {/* <li>Home</li> */}
                <li><a href="/">Home</a></li>
                {/* <li>About us</li> */}
                <li><a href="">About Us</a></li>
                {/* <li>Delivery</li> */}
                <li><a href="">Delivery</a></li>
                {/* <li>Privacy policy</li> */}
                <li><a href="">Privacy Policy</a></li>
             </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-213-432-3423</li>
                <li>contact@FeastyBites.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copywright'>Copywright 2024 © FeastyBites.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
