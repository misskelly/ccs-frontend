import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



const Atlas = (props) => {
  return (
    <Map id="mapid" center={props.userLocation} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.userLocation}>
        <Popup>Info about center</Popup>
      </Marker>
    </Map>
  );
};

export default Atlas;