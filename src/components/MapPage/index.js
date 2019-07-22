
import React, { useState} from 'react';
import Atlas from '../Atlas';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';

const MapPage = () => {
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userLocation, setUserLocation] = useState([]);
  const [closestLocation, setClosestLocation] = useState({
      "id": 1,
      "name": "Denver Walk-In Crisis Services",
      "phone": 3035041299,
      "address": "4353 E. Colfax Avenue",
      "city": "Denver", 
      "state": "CO", 
      "zip": 80220,
      "hours": "24 hours a day, 7 days a week",
      "lat": 39.7403,
      "lng": -104.9363
    });

  const getAndFetchUserLocation = () => {
    if (window.navigator.geolocation) {
    };
    fetchLocations();
  };

  const getUserLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition(async (position) => 
      await setUserLocation([position.coords.latitude, position.coords.longitude])
    );
    fetchLocations(userLocation)
  };

  const fetchLocations = () => {
    const url = 'https://cohelp-backend.herokuapp.com/api/v1/locations/sort?lat=39.7504&lng=-104.9963'
    fetchLocationsCall(url)
  };

  const drivingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=driving`;
  const walkingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=walking`;
  const transitUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=transit`;
  const bikingUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${closestLocation.lat},${closestLocation.lng}&travelmode=bicycling`;


  return (
    <section>
      <button onClick={getUserLocation}>Use Current Location</button>
      <p> If more comfortable {`${' '}`}
        <span onClick={() => {setCanEnterAddress(!canEnterAddress)}}>
           enter an adress.
        </span>
      </p>
      {
        canEnterAddress
        &&
        <form>
          <input name="address"/>
          <button>submit </button>
        </form>
      }
      {userLocation.length > 0 && <Atlas userLocation={userLocation} />}
      <p>Center is {closestLocation.distance} miles away</p>
      <section> 
        <h3>GET DIRECTIONS</h3>
        <a href={drivingUrl} target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/images/icons/car.svg")} alt="car directions link"/>
        </a>
        <a href={walkingUrl} target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/images/icons/walk.svg")} alt="walking directions link"/>
        </a>
        <a href={bikingUrl} target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/images/icons/bike.svg")} alt="biking directions link"/>
        </a>
        <a href={transitUrl} target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/images/icons/bus.svg")} alt="public transit directions link"/>
        </a>
      </section>
    </section>
  );
};

export default MapPage;

