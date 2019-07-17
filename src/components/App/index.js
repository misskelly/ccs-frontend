import React from 'react';
import Header from '../Header';
import HomePage from '../HomePage';
import MapPage from '../MapPage';

const App = () => {
  return (
    <main>
      <h1>InCrisis</h1>
      <Header />
      <HomePage />
      <MapPage />
      {/* <MoreInfoPage /> */}
    </main>
  )
}

export default App;