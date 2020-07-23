import React, { Component } from "react";

 
class Home extends Component {
  render() {
    return (
    <div>
    <img className="wide" src= "hourglassdolphinwide.jpg" alt="wide dolphin img"></img>
       <p class= "goals">Our ultimate goal is to create a student education program that is funded solely by the private sector.  Our mission is to create a first-hand one-on-one experience for students and their environment.</p>
        <div>
            <button href="./about" className="center">Learn More</button>    
        </div>
    </div>
    );
  }
}
 
export default Home;
