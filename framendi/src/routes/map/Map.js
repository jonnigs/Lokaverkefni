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
      query: "",
      countryPart: "",
      climbingAreas: "",
      season: "summer"
    };

    this.getQueryValue = this.getQueryValue.bind(this);
    this.setQueryValue = this.setQueryValue.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
  }

  async componentDidMount() {
    const query = this.getQueryValue();
    this.setQueryValue(query);
    const querySplit = query.split("=");
    this.setSeasonValue(querySplit[1]);
  }

  getQueryValue = () => {
    const query = this.props.location.search;
    return query;
  };

  setQueryValue = query => {
    this.setState({ query });
  };

  setSeasonValue = season => {
    if (season === "summer" || season === "winter") {
      this.setState({ season });
    }
  };

  handleSeasonChange = () => {
    if (this.state.season === "summer") {
      this.setState({ season: "winter" });
    } else {
      this.setState({ season: "summer" });
    }
    this.updateURLParameter();
  };

  updateURLParameter = () => {
    if (this.state.season === "summer") {
      window.history.pushState("page2", "Title", "/map?season=winter");
    } else {
      window.history.pushState("page2", "Title", "/map?season=summer");
    }
  };

  render() {
    const { season } = this.state;

    return (
      <main className="main">
        <div>
          <p>{season}</p>
          <Switch changeSeason={this.handleSeasonChange} season={season} />
          <p>{season}</p>
        </div>

        <Iceland />
      </main>
    );
  }
}

export default Map;
