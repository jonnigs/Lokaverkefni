import React, { Component } from "react";
import API from "../../fake-api.js";

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      area: ""
    };
  }

  async componentDidMount() {
    console.log(this.state.id);
  }

  render() {
    return (
      <main className="main">
        <p>Area</p>
      </main>
    );
  }
}

export default Area;
