import React, { useState,useEffect } from 'react'

import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './WeatherForm.css'
//Import Swiper styles
import 'swiper/css';


const WeatherForm = () => {

  const [weatherData,setweatherData]=useState([]);
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(()=>{
    const handleResize = () => {
      if (window.matchMedia('(max-width: 400px)').matches) {
        setSlidesPerView(3);
      } else if (window.matchMedia('(max-width: 600px)').matches) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };
    handleResize();
  },[])

  useEffect(()=>{
    getData();
},[]);

const getData=async()=>{
    const responce =await fetch("http://localhost:5000/weather");
    const data = await responce.json();
    //  console.log(data[0]);
    setweatherData(data);
    
}


  return (
    <div className='WeatherForm'>
          <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
    
      {/* {/* <SwiperSlide><Card /></SwiperSlide> */}
       {weatherData.map((city) => (
        <SwiperSlide key={city}>
          <div className="weather-card">
           
            <Card city={city}/>
          </div>
        </SwiperSlide>
       ))}
       ...
    </Swiper>
     
    </div>
  )
}

export default WeatherForm
