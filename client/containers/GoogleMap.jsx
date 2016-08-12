import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
// import Marker from '../components/Marker.jsx';
// Marker position needs to be broken up to the individual lat, lng props
// use new Date.now().getDay() for day of week index


class Map extends Component {
  renderMarkers(truck) {
    // GRAB CURRENT DAY OF WEEK
    const date = new Date;
    const index = date.getDay();
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const tweetDay = truck.timeStamp.slice(0, 3);

    // GRAB DAY OF TWEET TIMESTAMP FROM DB
    const tweetIndex = dayOfWeek.indexOf(tweetDay);

    // IF TWEET IS FROM TODAY, USE LOCATION OBJECT PULLED FROM TWEET,
    // OTHERWISE USE SCHEDULE FOUND IN DATABASE FOR LOCATION,
    // UNLESS THE TRUCK IS CLOSED TODAY. THEN PASS NULL TO MARKER SO IT DOESN'T RENDER
    const position = tweetIndex === index ? truck.location : truck.schedule[index].closed ? {lat: null, lng: null} : truck.schedule[index];
    if (position.lat) {
      return <Marker
        key={ truck._id } position={{ lat: position.lat, lng: position.lng }}
        // icon={{url:'https://media.giphy.com/media/8K1IYSnhUaNH2/giphy_s.gif'}}
      />
    };
  };
  render() {
    return (
      <GoogleMapLoader
        containerElement={ <div style={{height: '100%', width: '100%'}} /> }
        googleMapElement={
          <GoogleMap defaultZoom={ 12 } defaultCenter={{ lat: 37.7678011, lng: -122.4443519 }}>
            { this.props.trucks.map(truck => this.renderMarkers(truck)) }
          </GoogleMap>
        }
      />
    );
  }
};

function mapStateToProps(state) {
  return {
    trucks: state.trucks
  };
};

export default connect(mapStateToProps)(Map);
