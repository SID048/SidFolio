import React from 'react'
import './Testimonial.css'
import { TiArrowForwardOutline } from "react-icons/ti";
import { FiYoutube } from "react-icons/fi";



function Testimonial() {
  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="container">
        <div className="card">
          <div className="top">
          <TiArrowForwardOutline className='arrow' />

          <img className='imgg' src='https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds'/>
          <FiYoutube className='you' />

          </div>
          <div className="center">
            Lorem ipsum dccusamus quaerat, numquam consequuntur officia non quae odio odit quis voluptatibus dignissimos delectus quas nihil?
          </div>
          <div className="bottom">
            <h3>SID</h3>
            <h4>CSE NITP</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial