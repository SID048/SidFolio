import React from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";




function Topbar({menuopen, setmenuopen}) {
  return (
    <div className={"topbar "+ (menuopen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>SIDfolio.</a>
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <FontAwesomeIcon icon={["fal", "coffee"]} />
          <FontAwesomeIcon icon={['fab', 'apple']} /> */}
          <div className="itemcontainer">
            <FaPhoneAlt className='icon' />
            <span>+91 7991151907</span>
          
          </div>
          <div className="itemcontainer">
          <IoMdMail className='icon' />
            <span>sidd31503@gmail.com</span>
          </div>





        </div>
        <div className="right" >
          <div className="hamburger" onClick={()=>setmenuopen(!menuopen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar