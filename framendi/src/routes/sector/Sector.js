import React, { Component } from "react";

class Sector extends Component {
  render() {
    return (
      <main className="main">
        <p>{this.props.match.params}</p>
      </main>
    );
  }
}

export default Sector;
