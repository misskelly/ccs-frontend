import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



const Atlas = (props) => {
  return (
    <Map 
      id="mapid" 
      bounds={[[props.userLocation], [props.closestLocation.lat, props.closestLocation.lng]]}
      center={props.userLocation} zoom={13}
      boundsOptions={{padding: [50, 50]}}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.userLocation}>
        <Popup>Your Location</Popup>
      </Marker>
      <Marker position={[props.closestLocation.lat, props.closestLocation.lng]} >
        <Popup>
          {props.closestLocation.name} <br /> {props.closestLocation.street}, {props.closestLocation.zip}, {props.closestLocation.state}
        </Popup>
      </Marker>
    </Map>
  );
};

export default Atlas;

Atlas.propTypes = {
  userLocation: PropTypes.object
}
