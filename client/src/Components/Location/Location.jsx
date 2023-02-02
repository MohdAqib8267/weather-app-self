import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Location.css";
import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";
import Header from "../Header/Header";

const markerIcon = new L.Icon({
  iconUrl: require("../../Data/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Location = (props) => {
  //  console.log(props.sendData[0].coord.lat);
  const thirtyCities = props.sendData.slice(0, 30);
  // console.log(thirtyCities);
  //console.log(first);
  //console.log(first[0].coord.lat,first[0].coord.lon);

  const [center, setCenter] = useState({ lat:  28.644800, lng: 77.216721 });
  const zoom = 10;

  return (
    <div className="Location">
      <Header />

      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
       

        {thirtyCities.map((city, idx) => (
          <Marker position={[city.coord.lat, city.coord.lon]} icon={markerIcon} key={idx}>
            <Popup>
              {city.city}
              <br />
              {city.temperature} C
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default Location;
