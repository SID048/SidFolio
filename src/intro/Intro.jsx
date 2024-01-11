import React, { useEffect , useRef } from 'react'
import './Intro.css'
import { FaAnglesDown } from "react-icons/fa6";
import { init } from 'ityped'



function Intro() {

  const textref=useRef();

  useEffect(()=>{
    init(textref.current, { showCursor: true, backDelay:1500, strings: ['Coder', 'Web Developer','NITian' ] })

  },[])
  return (
    <div className='intro ' id='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/sidd.png"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There. I'm</h2>
          <h1>SIDDHARTH SINGH</h1>
          <h3>Student <span ref={textref}></span></h3>
        </div>
        <a href='#portfolio'>
        <FaAnglesDown className='ico'/>

        </a>
      </div>
      
      
      </div>
  )
}

export default Intro