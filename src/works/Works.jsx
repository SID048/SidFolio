import React from 'react'
import './Works.css'
import { FaMobileAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";




function Works() {
  return (
    <div className='works' id='works'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <FaMobileAlt className='imag' />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam sed corporis autem fugiat quidem sit labore. Quia eveniet dolor ipsum, officia sunt quo.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930' />
            </div>
          </div>
        </div>
      </div>
      <FaChevronLeft className='arrow left'/>

      <FaChevronRight className='arrow right'/>

    </div>
  )
}

export default Works