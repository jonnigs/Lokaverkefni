import React, { useState, useEffect, Component } from "react";
import WebGL from "../components/WebGL";
import Iceland from "../components/Iceland";
import Sudodata from "../sudodata.json";
import ClimbingAreaData from "../climbingAreaData.json";

console.log(Sudodata.results);

class Map extends Component {
  render() {
    return (
      <main className="main">
        <Iceland />
        <p>{this.props.match.params.id}</p>
        <p>{ClimbingAreaData.results[0].nafn}</p>
      </main>
    );
  }
}

export default Map;
