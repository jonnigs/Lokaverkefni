import React, { Component } from "react";
import init from "./init";

export default class WebGL extends Component {
  componentDidMount() {
    init("webgl-canvas");
  }

  render() {
    return (
      <canvas
        id="webgl-canvas"
        width="400"
        height="400"
        style={{ border: "1px solid black" }}
      ></canvas>
    );
  }
}
