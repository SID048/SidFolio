import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "../data";

function Portfolio() {
  const [selected,setselected]=useState("featured")
  const [data,setdata]=useState([]);
  const list=[
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"web",
      title:"Web App"
    },
    {
      id:"mobile",
      title:"Mobile App"
    },
    {
      id:"design",
      title:"Design"
    },
    {
      id:"content",
      title:"Content"
    }
  ];
  useEffect(()=>{
  switch(selected){
    case "featured":
    setdata(featuredPortfolio);
    break;
    case "web":
    setdata(webPortfolio);
    break;
    case "mobile":
    setdata(mobilePortfolio);
    break;
    case "design":
    setdata(designPortfolio);
    break;
    case "content":
    setdata(contentPortfolio);
    break;
    default:
      setdata(featuredPortfolio)
  }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li> */}
        {list.map((item)=>(
      <Portfoliolist 
      title={item.title} 
      active={selected===item.id} 
      setselected={setselected}
      id={item.id}
      />
))}
      </ul>
      <div className="container">
        {data.map((d)=>(
             <div className="item">
             <img src={d.img} alt=''/>
             <h3>{d.title}</h3>
           </div>
        )
        
        )}
      
      
        </div>
      </div>
    // </div>
  )
}

export default Portfolio