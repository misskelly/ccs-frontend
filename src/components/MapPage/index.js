
import React, { useState} from 'react';
import Atlas from '../Atlas';

const MapPage = () => {
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userLocation, setUserLocation] = useState([]);
  const [locations, setLocations] = useState([]);

  const getAndFetchUserLocation = () => {
    if (window.navigator.geolocation) {
    };
    fetchLocations();
  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition((position) => 
      setUserLocation([position.coords.latitude, position.coords.longitude])
    );
  };

  // const fetchLocations = () => {

  // };

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
    </section>
  );
};

export default MapPage;

