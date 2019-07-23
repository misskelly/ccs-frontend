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
      setUserLocation([lat, lng]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLocation = () => {
    setIsLoading(true);
    window.navigator.geolocation.getCurrentPosition(position =>
      setUserLocation([position.coords.latitude, position.coords.longitude]));
  };

  return (
    <article className="modal">
      {
        isLoading
        &&        <Loader />
      }
      {
        !isLoading
        &&        <>
          <button
            className="modal-btn use-loc-btn btn"
            type="button"
            autoFocus
            onClick={getUserLocation}
          >
              USE CURRENT LOCATION
          </button>
          {
            !canEnterAddress
            &&              <button
                className="modal-btn enter-address-btn btn"
                type="button"
                onClick={() => setCanEnterAddress(!canEnterAddress)}
              >
                Enter Address
              </button>
          }
          {
            canEnterAddress
            &&            <form onSubmit={fetchUsingAddress}>
              {/* TODO: Add labels to form fields!! */}
              <input
                className="modal-input street-input"
                type="text"
                placeholder="Street Address"
                autoComplete="shipping street-address"
                onChange={e => setStreetAddress(e.target.value)}
              />
              <input
                className="modal-input zip-input"
                type="number"
                placeholder="ZIP"
                autoComplete="shipping postal-code"
                onChange={e => setZipCode(e.target.value)}
              />
              <input
                className="modal-input city-input"
                type="text"
                placeholder="City"
                autoComplete="shipping locality"
                onChange={e => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="modal-btn submit-btn btn"
              >
                Submit
              </button>
            </form>
          }
          <NavLink
            className="back-btn btn"
            to="/"
          >
            Back
          </NavLink>
        </>
      }
    </article>
  );
};

export default Modal;
