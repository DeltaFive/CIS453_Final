import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter } from "react-router-dom";

import Home from "./Home";
import About from  "./About";
import theHourglassDolphin from "./TheHourglassDolphin";
import tripSummaries from "./TripSummaries";
import contributors from "./Contributors";
import Contact from "./Contact";
import Donate from "./Donate";

{/*This will build our app's structure*/}
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <img class="logo"src="DPDPEF.jpg" alt="dolphinlogo"></img>
            <ul className="header">
              <li className="basic"><NavLink to="/">HOME</NavLink></li>
              <li className="basic"><NavLink to="/about">ABOUT</NavLink></li>
              <li className="basic"><NavLink to="/theHourglassDolphin">THE HOURGLASS DOLPHIN</NavLink></li>
              <li className="basic"><NavLink to="/tripSummaries">TRIP SUMMARIES</NavLink></li>
              <li className="basic"><NavLink to="/contributors">CONTRIBUTORS</NavLink></li>
              <li className="basic"><NavLink to="/contact">CONTACT</NavLink></li>
              <li class="buttonlike"><NavLink to="/donate">DONATE</NavLink></li>

            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/theHourglassDolphin" component={theHourglassDolphin}/>
              <Route path="/tripSummaries" component={tripSummaries}/>
              <Route path="/contributors" component={contributors}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/Dontact" component={Donate}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;