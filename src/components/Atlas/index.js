import React from 'react';
import {
  Map, Marker, Popup, TileLayer
} from 'react-leaflet';


const Atlas = (props) => {
  const centerLocations = [
    {
      id: 1,
      name: 'Denver Walk-In Crisis Services',
      phone: 3035041299,
      address: '4353 E. Colfax Avenue',
      city: 'Denver',
      state: 'CO',
      zip: 80220,
      hours: '24 hours a day, 7 days a week',
      lat: 39.7403,
      lng: -104.9363
    },
    {
      id: 2,
      name: 'Boulder Walk-In Crisis Services',
      phone: 3034438500,
      address: '3180 Airport Road',
      city: 'Boulder',
      state: 'CO',
      zip: 80301,
      hours: '24 hours a day, 7 days a week',
      lat: 40.0330,
      lng: -105.2360
    }
  ];

  return (
    <Map
      id="mapid"
      bounds={[[props.userLocation], [centerLocations[0].lat, centerLocations[0].lng]]}
      center={props.userLocation}
      zoom={13}
      boundsOptions={{ padding: [50, 50] }}
    >

      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.userLocation}>
        <Popup>Your Location</Popup>
      </Marker>
      <Marker position={[centerLocations[0].lat, centerLocations[0].lng]}>
        <Popup>Center Location</Popup>
      </Marker>
    </Map>
  );
};

export default Atlas;
