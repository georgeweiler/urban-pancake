import React, {Component} from 'react'
import {Link} from "react-router";

export default class HomeHeader extends Component {
  render() {
    return ( 
        <div className="header">
          <div className="home-text col-xs-offset-1 col-xs-2"><Link to="/"><img className="burrito"src="http://image.flaticon.com/icons/svg/184/184534.svg" alt="Home"/></Link></div>
          <div className ="col-xs-offset-1 col-xs-8">
            <h1 >SF CITY FOOD TRUCKS</h1>
          </div>
        </div>
    )
  }
}