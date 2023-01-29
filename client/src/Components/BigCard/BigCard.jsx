import React, { useState,useEffect } from 'react'
import './BigCard.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Degree from '@iconscout/react-unicons/icons/uil-celsius';
import Location from '@iconscout/react-unicons/icons/uil-location-point'
import {  NavLink } from 'react-router-dom';
const BigCard = () => {

    
    
   
    let currentDate = new Date().toLocaleString();
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    // console.log(currentDate.toLocaleString());   

 
    
    const [weatherData,setweatherData]=useState([]);

    useEffect(()=>{
    
      getData(); 
      
  },[]);
  
  const getData=async()=>{
      const responce =await fetch("http://localhost:5000/weather");
      const data = await responce.json();
       //console.log(data[0]);
        // console.log(data[0].city)
      setweatherData(data[0]); 
      const currData = localStorage.getItem("weather");
      const res = JSON.parse(currData); 
      if(res.city.city != weatherData.city){
        setweatherData(res.city);
        
    }
      
  }
    
  return (
    <div className='BigCard'>
        <div className="card-l">
            <div className="weather-info">
               <Sun style={{width:"5rem",height:"5rem",color:'var(--orange)'}}/> 
               <span style={{fontSize:'2rem',color:'var(--gray)',fontWeight:'bold'}}>{weatherData.temperature}</span>
               <Degree/>
            </div>
            <div className="date">
                <span>{currentDate}</span>
            </div>
            <div className="day">
                {currentDay}
            </div>
        </div>
        <div className="card-r">
                <NavLink to="/map" ><Location style={{cursor:"pointer", width: '3rem',height: '3rem',color: 'var(--location)'}} /></NavLink>
                
                <span className="city">
                      <div style={{fontSize:'2rem',fontWeight:'bold', color:'var(--orange)'}}>{weatherData.city}</div>
                      <div style={{fontSize:'2rem',fontWeight:'bold',color:'var(--gray)'}}>India</div>
                </span>
            
        </div>
        <div className="card-b">
            <div className="info-card">
                <span style={{color:"blueviolet"}}>Humedity</span>
                <span>{weatherData.humidity}</span>
            </div>
            <div className="info-card">
                <span style={{color:"var(--orange)"}}>WindSpeed</span>
                <span >{weatherData.windSpeed}</span>
            </div>
            <div className="info-card">
                <span style={{color:"green"}}>Humedity </span>
                <span>{weatherData.clouds}</span>
            </div>
        </div>
      
    </div>
  )
}

export default BigCard
