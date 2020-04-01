import React, { Component } from "react";
//mport { Link } from "react-router-dom";
import "./IcelandPart.css";
import vestfirdirsummer from "../../images/maps/vestfirdir-sumar.svg";
import vestfirdirwinter from "../../images/maps/vestfirdir-vetur.svg";
import vesturlandsummer from "../../images/maps/vesturland-sumar.svg";
import vesturlandwinter from "../../images/maps/vesturland-vetur.svg";
import hofudborgarsvaedidsummer from "../../images/maps/hofudborgarsvaedid-sumar.svg";
import hofudborgarsvaedidwinter from "../../images/maps/hofudborgarsvaedid-vetur.svg";
import sudurlandsummer from "../../images/maps/sudurland-sumar.svg";
import sudurlandwinter from "../../images/maps/sudurland-vetur.svg";
import austurlandsummer from "../../images/maps/austurland-sumar.svg";
import austurlandwinter from "../../images/maps/austurland-vetur.svg";
import nordurlandsummer from "../../images/maps/nordurland-sumar.svg";
import nordurlandwinter from "../../images/maps/nordurland-vetur.svg";
import midhalendisummer from "../../images/maps/midhalendi-sumar.svg";
import midhalendiwinter from "../../images/maps/midhalendi-vetur.svg";
import vatnajokullsummer from "../../images/maps/vatnajokull-sumar.svg";
import vatnajokullwinter from "../../images/maps/vatnajokull-vetur.svg";

const partOptions = [
  vestfirdirsummer,
  vestfirdirwinter,
  vesturlandsummer,
  vesturlandwinter,
  hofudborgarsvaedidsummer,
  hofudborgarsvaedidwinter,
  sudurlandsummer,
  sudurlandwinter,
  austurlandsummer,
  austurlandwinter,
  nordurlandsummer,
  nordurlandwinter,
  midhalendisummer,
  midhalendiwinter,
  vatnajokullsummer,
  vatnajokullwinter
];

class IcelandPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //id: this.props.match.params.id,
      season: "summer",
      countryPart: ""
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const query = url.split("=");
    if (query[1] === "winter") {
      this.setState({ season: query[1] });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.season !== this.props.season) {
      if (this.props.season === "summer") {
        this.setState({
          season: this.props.season
        });
      } else {
        this.setState({
          season: this.props.season
        });
      }
    }
  }

  render() {
    const { season } = this.state;

    return (
      <div className="icelandpart">
        <p>{this.props.whichPart}</p>
        <img
          className="mapPart"
          src={vestfirdirsummer}
          alt="Mynd af landshluta"
        />
        {console.log(this.props.whichPart, season)}
      </div>
    );
  }
}

export default IcelandPart;
