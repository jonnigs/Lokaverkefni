import React, { useState, useEffect, Component } from "react";
import WebGL from "../components/WebGL";
import Sudodata from "../sudodata.json";

console.log(Sudodata.results);

class Map extends Component {
  render() {
    return (
      <main className="main">
        <WebGL />
      </main>
    );
  }
}

export default Map;
