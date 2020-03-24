import React, { useState, useEffect, Component } from "react";
import Sudodata from "../sudodata.json";

console.log(Sudodata.results);

class Map extends Component {
  render() {
    return (
      <main className="main">
        <canvas id="gl-canvas" width="512" height="512">
          Oops ... your browser doesn't support the HTML5 canvas element
        </canvas>
      </main>
    );
  }
}

export default Map;
