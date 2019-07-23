import React, { useState, useEffect } from 'react';
import Atlas from '../Atlas';
import Modal from '../Modal';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';

const MapPage = () => {
  const [userAddress, setUserAddress] = useState('');
  const [userLocation, setUserLocation] = useState([]);
  const [closestLocation, setClosestLocation] = useState({});

  useEffect(
    () => {
      if(userLocation.length) {
        fetchLocations();
      }
    },
    [userLocation]
  );

  const fetchLocations = async () => {
    const url = `https://cohelp-backend.herokuapp.com/api/v1/locations/sort?lat=${userLocation[0]}&lng=${userLocation[1]}`
    const response = await fetchLocationsCall(url)
    setClosestLocation(response.locations[0])
  };

  const drivingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=driving`;
  const walkingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=walking`;
  const transitUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=transit`;
  const bikingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=bicycling`;


  return (
    <main className="map-page">
      {
        !closestLocation.lat
        &&
        <Modal userLocation={{ userLocation: [userLocation, setUserLocation] }} />
      }
      {
        closestLocation.lat
        &&
        <article>
          <map>
            <Atlas userLocation={userLocation} />
          </map>
          <p>Center is {closestLocation.distance} miles away</p>
          <h3>GET DIRECTIONS</h3>
          <a href={drivingUrl} target="_blank" rel="noopener noreferrer">
            <img className="svg-icon car-icon" src={require("../../assets/images/icons/car.svg")} alt="car directions link"/>
          </a>
          <a href={walkingUrl} target="_blank" rel="noopener noreferrer">
            <img className="svg-icon walk-icon" src={require("../../assets/images/icons/walk.svg")} alt="walking directions link"/>
          </a>
          <a href={bikingUrl} target="_blank" rel="noopener noreferrer">
            <img className="svg-icon bike-icon" src={require("../../assets/images/icons/bike.svg")} alt="biking directions link"/>
          </a>
          <a href={transitUrl} target="_blank" rel="noopener noreferrer">
            <img className="svg-icon bus-icon"src={require("../../assets/images/icons/bus.svg")} alt="public transit directions link"/>
          </a>
        </article>
      }
    </main>
  );
};

export default MapPage;

