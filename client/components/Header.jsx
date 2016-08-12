import React, {Component} from 'react'
import {Link} from "react-router";

export default class HomeHeader extends Component {
  render() {
    return ( 
      <header className="row">
        <nav className="navbar navbar-default">
          <div className="home-text col-xs-offset-1 col-md-1"><Link to="/">Home</Link></div>
          <div className ="col-xs-offset-1 col-md-offset-2 col-md-4">
            <h1 >SF CITY FOOD TRUCKS</h1>
          </div>
          <div className="col-xs-offset-1 col-md-offset-2 col-md-2 github">
            <a href="https://github.com/laser-disc/urban-pancake">Check out the code</a>
          </div>
         </nav>
       </header>
    )
  }
}