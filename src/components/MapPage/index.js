import React, { useEffect, useState} from 'react';
import Atlas from '../Atlas';

function MapPage() {

  return (
    <section>
      <button>Use Current Location</button>
      <form> 
        <input name="address"/>
        <button>submit </button>
      </form>
      <Atlas />
    </section>
  );
};

export default MapPage