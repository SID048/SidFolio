import React, { useState } from 'react'
import Topbar from './topbar/Topbar'
import Intro from './intro/Intro'
import Portfolio from './portfolio/Portfolio'
import Works from './works/Works'
import Testimonial from './testimonial/Testimonial'
import Contact from './contact/Contact'
import './App.css'
import Menu from './menu/Menu'

function App() {
  const[menuopen,setmenuopen]=useState(false)
  return (
    <div className='app'>
      <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
       
      </div>
    </div>
  )
}

export default App