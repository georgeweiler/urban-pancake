import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TruckViewHeader from '../components/TruckViewHeader.jsx';
import TruckProfile from '../containers/TruckProfile.jsx';
import TruckImageContainer from '../components/TruckImageContainer.jsx';
import { FetchYelp } from '../actions/FetchYelp';

class TruckView extends Component {

  componentWillMount() {
    this.props.FetchYelp();
  }

  renderTruckView(truck){
    return <TruckProfile key={ truck.yelpBizID } yelpInfo ={ truck } />
  }

  render(){
    return (
      <div>
        <link href="https://cdn.auth0.com/styleguide/4.8.6/index.min.css" rel="stylesheet" />
        <TruckViewHeader />
        { this.props.yelpInfo.map(truck => this.renderTruckView(truck)) }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    yelpInfo: state.yelpInfo
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ FetchYelp }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckView);
