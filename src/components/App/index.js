import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../HomePage';
import MapPage from '../MapPage';
import AllCenters from '../AllCentersPage';
import MoreInfo from '../MoreInfoPage';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/walk-in" component={MapPage} />
      <Route path="/all-centers" component={AllCenters} />
      <Route path="/more-info" component={MoreInfo} />
    </Switch>
  </div>
);

export default App;
