import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
 import Header from '../Header/Header';
import { Icon } from "leaflet";




export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

const Location = (props) => {
  //  console.log(props.sendData[0].coord.lat);
  const first = props.sendData.slice(0,30);
  //console.log(first);
  //console.log(first[0].coord.lat,first[0].coord.lon);


  const position = [27.5, 77.6833]
  return (
    <div className='Location'>
      <Header/>
      {/* <span style={{display:'flex',justifyContent:'center',gap:'2px',fontWeight:'bold'}}>New Delhi</span>  */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100%',height:'90vh'}}>
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        
        {
          first.map((item,ind)=>{
            <Marker position={[item.coord.lat,item.coord.lon]} key={ind} icon={icon} >
                <Popup style={{display:'flex',flexDirection:'column', gap:'0.2rem'}}>
                 {item.city}
                 <br />
                 {item.temperature} C
               </Popup> 
            
            </Marker>
             
          })
        }
       
      </MapContainer>
    </div>
  )
}
 export default Location


