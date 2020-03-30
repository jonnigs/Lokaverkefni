import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Helmet from "react-helmet";
import Iceland from "../../components/Iceland";
import Switch from "../../components/Switch";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      id: this.props.match.params.id,
      countryPart: "",
      climbingAreas: "",
      season: "summer"
    };

    this.handleSeasonChange.bind(this);
  }

  handleSeasonChange = () => {
    if (this.state.season == "summer") {
      this.setState({
        season: "winter"
      });
    } else {
      this.setState({
        season: "summer"
      });
    }
  };

  callbackFunction = childData => {
    this.setState({ season: childData });
  };

  render() {
    const {
      loading,
      error,
      id,
      countryPart,
      climbingAreas,
      season
    } = this.state;

    return (
      <main className="main">
        <Switch />
        <Iceland />
      </main>
    );
  }
}

export default Map;
