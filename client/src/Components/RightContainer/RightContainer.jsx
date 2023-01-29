import React from 'react'
import BigCard from '../BigCard/BigCard'
import Header from '../Header/Header'
import WeatherForm from '../WeatherForm/WeatherForm'
import './RightContainer.css'
const RightContainer = () => {
  return (
    <div className='RightContainer'>
         <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '45%', left: '8rem'}}></div>
        <div className="blur" style={{bottom: '20%', right: '0rem'}}></div>
      <Header/>
      <BigCard />
      <WeatherForm/>
     
    </div>
  )
}

export default RightContainer
