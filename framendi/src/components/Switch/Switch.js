import React, { Component } from "react";
import "./Switch.css";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };

    this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    });
    console.log(this.state.checked);
  }

  render() {
    return (
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          onClick={() => this.handleCheck()}
        />
        <label className="onoffswitch-label" for="myonoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    );
  }
}

export default Switch;
