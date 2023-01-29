import React from 'react'
import './Card.css'
import Sun from '@iconscout/react-unicons/icons/uil-wind-sun'
import Degree from '@iconscout/react-unicons/icons/uil-celsius'



const sendBigCard=(props)=>{
  // console.log(props);
  localStorage.setItem("weather",JSON.stringify(props));
  
}


const Card = (props) => {
  // console.log(props);


  return (
    <div className='card' onClick={()=>sendBigCard(props)}  >
        <div className="card-up">
          <div className="home">
            <Sun/>
          <h2>{props.city.temperature}</h2>
          <Degree style={{display:"flex",justifyContent:"center",alignItems:"center"}}/>
          </div>
        <div className="name">
          <span>{props.city.city}</span>
          <span>INDIA</span>
        </div>
        </div>

        <div className="line">

        </div>

        <div className="info">
          <div className="info-type">
            <span>Humidity</span>
            <span>{props.city.humidity}</span>
          </div>
          <div className="info-type">
            <span>Wind</span>
            <span>{props.city.windSpeed}</span>
          </div>
          <div className="info-type">
            <span>Cloud</span>
            <span>{props.city.clouds}</span>
          </div>
        </div>
    </div>
  )
}

export default Card
