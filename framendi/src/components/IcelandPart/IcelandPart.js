import React, { Component } from "react";
//import { Link } from "react-router-dom";
import API from "../../fake-api.js";

import "./IcelandPart.css";

class IcelandPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //id: this.props.match.params.id,
      season: "summer",
      countryPart: "",
      svg: ""
    };
    this.getSVG = this.getSVG.bind(this);
  }

  componentDidMount() {
    const url = window.location.href;
    const query = url.split("=");
    if (query[1] === "winter") {
      this.setState({ season: query[1], countryPart: this.props.whichPart });
    }
    this.getSVG();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.season !== this.props.season) {
      if (this.props.season === "summer") {
        this.getSVG();
        this.setState({
          season: this.props.season
        });
      } else {
        this.getSVG();
        this.setState({
          season: this.props.season
        });
      }
    }
  }

  getSVG = () => {
    const svgSlod = API.get(this.props.whichPart, this.props.season);
    this.setState({
      svg: svgSlod
    });
  };

  render() {
    const { season, svg } = this.state;

    return (
      <div className="icelandpart">
        <p>{this.props.whichPart}</p>
        <img
          className="mapPart"
          //src={API.get(this.props.whichPart)}
          alt="Mynd af landshluta"
          src={svg}
        />
      </div>
    );
  }
}

export default IcelandPart;
