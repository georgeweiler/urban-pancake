import React from 'react';
import TruckList from '../containers/TruckList.jsx';
import GoogleMap from '../containers/GoogleMap.jsx';
import {Link} from "react-router";
import {Router, Route, hashHistory} from 'react-router';
import Header from './Header.jsx'

      

let googleMap;
if (process.env.TEST_ENV === 'test') {
  googleMap = <div />;
} else {
  googleMap = <GoogleMap />;
}

export default () => {
return (
  <div className='mega-container'>

    <div className='wrap row'>
    <Header />
      <div className="col-md-6 google-map">
       {googleMap} 
      </div>
    
      <div className="col-md-5 truck-list">
      <TruckList />
      </div>
    </div>

    <div className="footer row">
      <h4>Contact</h4>
      <p> Created by MKS Students </p>
    </div>

  </div>
)
}
