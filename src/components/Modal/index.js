import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Loader } from '../Loader/index';

const Modal = (props) => {
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const {
    userLocation: [userLocation, setUserLocation]
  } = {
    ...(props.userLocation || {})
  };


  const fetchUsingAddress = async () => {
    //move line 19-23 and into a try catch to apiCalls folder in utils
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${streetAddress.split(' ').join('+')},+${city},+CO&key=`);
    if (!response.ok) {
      throw Error('Sorry we were not able to find that.');
    };
    const results = response.json();
    const { lat, lng } = results.geometry.location;
    setUserLocation([ lat, lng ]);
  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition((position) => 
      setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  };

  return (
    <article className="modal">
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
          <input type="text" placeholder="Street Address" autoFocus={true} autocomplete="shipping street-address" onChange={(e) => setStreetAddress(e.target.value)}/>
          <input type="number" placeholder="ZIP" autocomplete="shipping postal-code" onChange={(e) => setZipCode(e.target.value)}/>
          <input type="text" placeholder="City" autocomplete="shipping locality" onChange={(e) => setCity(e.target.value)}/>
          <button>Submit</button>
        </form>
      }
      <NavLink to="/">
        <p>Back</p>
      </NavLink>
    </article>
  );
};

export default Modal;
