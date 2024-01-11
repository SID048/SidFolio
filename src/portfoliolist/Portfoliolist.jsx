import React from 'react'
import './portfoliolist.css'

function Portfoliolist({id,title,active,setselected}) {
  return (
    <li className={active ? "portfoliolist active":"portfoliolist"}
     onClick={()=>setselected(id)}>
        {title}

    </li>
  )
}

export default Portfoliolist