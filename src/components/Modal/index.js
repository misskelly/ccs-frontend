import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchLocationsCall } from '../../utils/apiCalls/fetchLocationsCall';
import { fetchLocationFromAddress } from '../../utils/apiCalls/fetchLocationFromAddress';
import { Loader } from '../Loader';

const Modal = (props) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const {
    userLocation: [userLocation, setUserLocation]
  } = {
    ...(props.userLocation)
  };


  const fetchUsingAddress = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${streetAddress.split(' ').join('+')},+${city.split(' ').join('+')},+CO&key=`;
      const response = await fetchLocationsCall(url);
      const { lat, lng } = response.results[0].geometry.location;
      setUserLocation([ lat, lng ]);
    } catch (error) {
      console.log(error);
    };
  };

  const getUserLocation = () => {
    setIsLoading(true);
    window.navigator.geolocation.getCurrentPosition((position) => 
      setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  };

  return (
    <article className="modal">
      {
        isLoading
        &&
        <Loader />
      }
      {
        !isLoading
        &&
        <div>
          <button autoFocus={true} onClick={getUserLocation}>USE CURRENT LOCATION</button>
          {
            !canEnterAddress
            &&
            <button onClick={ () => setCanEnterAddress(!canEnterAddress) }>Enter Address</button>
          }
          {
            canEnterAddress
            &&
            <form onSubmit={fetchUsingAddress}>
              <input type="text" placeholder="Street Address" autoFocus={true} autoComplete="shipping street-address" onChange={(e) => setStreetAddress(e.target.value)}/>
              <input type="number" placeholder="ZIP" autoComplete="shipping postal-code" onChange={(e) => setZipCode(e.target.value)}/>
              <input type="text" placeholder="City" autoComplete="shipping locality" onChange={(e) => setCity(e.target.value)}/>
              <button>Submit</button>
            </form>
          }
          <NavLink to="/">
            <p>Back</p>
          </NavLink>
        </div>
      }
    </article>
  );
};

export default Modal;
