import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


function Atlas () {
  const positionOfCenter = []
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>Info about center</Popup>
      </Marker>
    </Map>
  )
}

export default Atlas;