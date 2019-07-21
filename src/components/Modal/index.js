import React, { useState } from 'react'

const Modal = (props) => {
  const [address, setAddress] = useState('');
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const {
    userLocation: [userLocation, setUserLocation]
  } = {
    userLocation: useState([]),
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
          <input placeholder="Enter an Address" onChange={(e) => setAddress(e.target.value)}/>
          <button>Submit</button>
        </form>
      }
    </section>
  );
};

export default Modal;
