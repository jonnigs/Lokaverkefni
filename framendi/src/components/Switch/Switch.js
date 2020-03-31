import React, { Component } from "react";
import "./Switch.css";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: "summer"
    };

    this.sendSeasonToParent = this.sendSeasonToParent.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  sendSeasonToParent = () => {
    if (this.state.season === "summer") {
      this.props.changeSeason("winter");
      this.setState({ season: "winter" });
    } else {
      this.props.changeSeason("summer");
      this.setState({ season: "summer" });
    }
  };

  startOnWinter = () => {
    this.setState({ season: "winter" });
  };

  render() {
    if (this.props.season != this.state.season) {
      this.startOnWinter();
    }

    return (
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          onClick={() => {
            this.sendSeasonToParent();
          }}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    );
  }
}

export default Switch;
