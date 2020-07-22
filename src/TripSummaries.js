import React, { Component } from "react";
 
class TripSummaries extends Component {
  render() {
    return (
      <div>
        <h2>TRIP SUMMARIES</h2>
        <p>Read our captain and marine naturalist’s latest trip summaries below.</p>
        <ol>
          <li>Trip 10 May 24, 2019 ---- Todd Mansur Captain / 88 / Departure 10:00 am</li>
          <li>Trip 11 May 25, 2019 ---- Todd Mansur Captain / 32 / Departure 10:00 am</li>
          <li>Trip 12 May 29, 2019 ---- Todd Mansur Captain / 61 / Departure 10:00 am</li>
          <li>Trip 13 June 5, 2019 ---- Todd Mansur Captain / 20 / Departure 4:00 am</li>
          <li>Trip 14 July1, 2019 ---- Todd Mansur Captain / 83 / Departure 10:00 am</li>
        </ol>
      </div>
    );
  }
}
 
export default TripSummaries;