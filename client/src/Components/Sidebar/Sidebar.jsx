import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="app-name" style={{color:'var(--cardColor)'}}>
            Weather App
        </div>
         <ul className='items'>
          <NavLink to="/" style={{listStyle:'none'}}>
         <li style={{color:'var(--photo)',fontWeight:'bold'}}>Home</li>
           </NavLink>
           <NavLink to="/map" style={{listStyle:'none'}}>
        <li style={{color:'var(--orange)',fontWeight:'bold'}}>Map</li>
        </NavLink>
          <li style={{color:'var(--shedule)',fontWeight:'bold'}}>About Us</li> 

        </ul> 
          
    </div>
  )
}

export default Sidebar
