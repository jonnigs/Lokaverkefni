import React, { useState, useEffect, Component } from "react";
import WebGL from "../components/WebGL";
import Iceland from "../components/Iceland";
import Sudodata from "../sudodata.json";

console.log(Sudodata.results);

class Map extends Component {
  render() {
    return (
      <main className="main">
        <Iceland />
      </main>
    );
  }
}

export default Map;
