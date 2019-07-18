import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../HomePage';
import MapPage from '../MapPage';
import AllCentersPage from '../AllCentersPage';
// import MoreInfoPage from '../MoreInfoPage';

const App = () => {
  return (
    <>
      <Header />
      <MapPage> </MapPage>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/walk-in' component={ MapPage } />
        <Route path='/all-centers' component={ AllCentersPage } />
        {/* <Route path='/more-info' component={ MoreInfoPage } /> */}
        {/* <Route path='/' component={ ErrorPage } /> */}
      </Switch>
    </>
  )
}

export default App;