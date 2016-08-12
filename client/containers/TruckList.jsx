import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import TruckItem from '../components/TruckItem.jsx';
import { FetchTrucks } from '../actions/FetchTrucks';
import { FetchYelp } from '../actions/FetchYelp';

class TruckList extends Component {
  // Runs FetchTrucks immediately so that the state will be up to date before the content starts to load
  componentWillMount() {
    this.props.FetchTrucks();
  }
  // Iterates over each truck in the database
  renderTrucks(truck) {
    return  <Link to="/truckview" key={truck._id} > <TruckItem truck={truck} /></Link>
  };
  // Maps truck prop to TruckItem
  render() {
    return (

      <div className="truck-list well">
        {this.props.trucks.map(truck => this.renderTrucks(truck))}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    trucks: state.trucks,
    yelpInfo: state.yelpInfo
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ FetchTrucks, FetchYelp }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
