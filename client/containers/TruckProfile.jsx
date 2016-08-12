import React, { Component } from 'react';
import TwitterBox from '../components/TwitterBox.jsx';
import TruckCategories from '../components/TruckCategories.jsx'
export default class TruckProfile extends Component {

  render(){
    var truckProfileImgStyle = {
      backgroundImage : "url(" + this.props.yelpInfo.photo +")",
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="truck-profile-img-container well">
              <div className="truck-profile-img" style={truckProfileImgStyle}>
              </div>
              <TruckCategories/>
            </div>
          </div>
          <div className="col-md-6">
            <TwitterBox />
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    )
  }
}
      // <div className='truck-profile col-md-7 test'>
      //   <div className="truck-profile-title">
      //   </div>
      //   <img className='truck-profile-img test' src="https://pbs.twimg.com/profile_images/336415645/P1010033.JPG" alt="png"/>
      // </div>
