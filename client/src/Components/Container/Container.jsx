import React, { useEffect, useState } from 'react'

import Location from '../Location/Location'

import RightContainer from '../RightContainer/RightContainer'
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './Container.css'

const Container = () => {


 
const [sendData,setsendData]=useState([]);
  useEffect(()=>{
    getData();
},[]);

const getData=async()=>{
    const responce =await fetch("http://localhost:5000/weather");
    const data = await responce.json();
    //  console.log(data[0]);
    const thirty=data.splice(Math.max(data.length - 30, 0));
    setsendData(thirty);
    
}
  return (
    <div className= 'Container'>
   <BrowserRouter>
         <Sidebar />
         <Routes>
            <Route path='/' element={<RightContainer/>}/>
            <Route path='/map' element={<Location sendData={sendData} />}/>
         </Routes>
          {/* <RightContainer/> */}
        {/* <Location /> */}
   
   </BrowserRouter>
       
    </div>
  )
}

export default Container
