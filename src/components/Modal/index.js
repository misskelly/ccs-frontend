import React, { useState } from 'react'

const Modal = (props) => {
  const [address, setAddress] = useState('');
  const [canEnterAddress, setCanEnterAddress] = useState(false);
  const fetchUsingAddress = () => {

  }
  return (
    <section className="modal">
      {
        !canEnterAddress
        &&
        <article>
          <button onClick={props.getUserLocation}>USE CURRENT LOCATION</button>
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
