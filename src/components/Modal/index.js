import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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


  const fetchUsingAddress = () => {

  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition((position) => 
      setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  };

  return (
    <section className="modal">
      {
        !canEnterAddress
        &&
        <article>
          <button onClick={getUserLocation}>USE CURRENT LOCATION</button>
          <button onClick={ () => setCanEnterAddress(!canEnterAddress) }>Enter Address</button>
        </article>
      }
      {
        canEnterAddress
        &&
        <form onSubmit={fetchUsingAddress}>
          <input type="text" placeholder="Street Address" onChange={(e) => setStreetAddress(e.target.value)}/>
          <input type="number" placeholder="ZIP" onChange={(e) => setZipCode(e.target.value)}/>
          <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
          <button>Submit</button>
        </form>
      }
    </section>
  );
};

export default Modal;
