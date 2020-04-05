import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import Helmet from "react-helmet";
import IcelandPart from "../../components/IcelandPart";
import Switch from "../../components/Switch";
import API from "../../fake-api.js";
//import ClimbingAreaData from "../../climbingAreaData.json";
import "./MapPart.css";

class MapPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      query: "",
      season: "summer",
      mapPartData: ""
    };

    this.getQueryValue = this.getQueryValue.bind(this);
    this.setQueryValue = this.setQueryValue.bind(this);
    this.getClimbingAreas = this.getClimbingAreas.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
  }

  async componentDidMount() {
    const query = this.getQueryValue();
    this.setQueryValue(query);
    const querySplit = query.split("=");
    this.setSeasonValue(querySplit[1]);
    this.getClimbingAreas(this.state.id);
  }

  getClimbingAreas = id => {
    const data = API.getTemp(id);
    this.setState({
      mapPartData: data,
      summerAreas: data.sumar[0].svaedi,
      winterAreas: data.vetur[0].svaedi
    });
  };

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
    const URLBase = "/map/" + this.state.id;
    if (this.state.season === "summer") {
      const URL = URLBase + "?season=winter";
      window.history.pushState("page2", "Title", URL);
    } else {
      const URL = URLBase + "?season=summer";
      window.history.pushState("page2", "Title", URL);
    }
  };

  render() {
    const { season, id, mapPartData } = this.state;

    let climbingAreas;
    if (mapPartData) {
      if (season === "summer") {
        climbingAreas = mapPartData.sumar[0].svaedi.map(svaedi => {
          return <p>{svaedi.nafn}</p>;
        });
      } else {
        climbingAreas = mapPartData.vetur[0].svaedi.map(svaedi => {
          return <p>{svaedi.nafn}</p>;
        });
      }
    }

    return (
      <main className="main">
        <Switch changeSeason={this.handleSeasonChange} season={season} />
        <div>
          <IcelandPart whichPart={id} season={season} />
        </div>
        <h1>{id}</h1>
        {climbingAreas}
      </main>
    );
  }
}

export default MapPart;
