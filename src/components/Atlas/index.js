import React, { useEffect, useState} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



function Atlas () {
  const lat = 39.780760;
  const long = -105.082270;
  const originalCenter = [lat, long];

  const [userLocation, setUserLocation] = useState(originalCenter);
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => 
      setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  });
  
  
  return (
    <Map id="mapid" center={userLocation} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={userLocation}>
        <Popup>Info about center</Popup>
      </Marker>
    </Map>
  );
};

export default Atlas;