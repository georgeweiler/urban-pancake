import {Router, Route, hashHistory} from 'react-router';
import TruckList from '../containers/TruckList.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import TruckView from '../containers/TruckView.jsx';
import Home from '../components/Home.jsx'
import React, {Component} from 'react';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path = "/" component={Home} />
      <Router path ="/truckview" component={TruckView} />
    </Router>
  )

}