import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Helmet from "react-helmet";
import IcelandPart from "../../components/IcelandPart";
import ClimbingAreaData from "../../climbingAreaData.json";
import "./MapPart.css";

class MapPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      id: this.props.match.params.id,
      countryPart: "",
      climbingAreas: ""
    };
  }

  async componentDidMount() {
    console.log(this.state.id);
  }

  render() {
    const { loading, error, id, countryPart, climbingAreas } = this.state;
    console.log(countryPart);

    let climbingAreasHTML;
    if (climbingAreas) {
      climbingAreasHTML = climbingAreas.map(t => (
        <p>
          <Link to="/about">{t.nafn}</Link>
        </p>
      ));
    }
    return (
      <main className="main">
        <div>
          <IcelandPart whichPart={id} />
        </div>
        <h1>{id}</h1>
      </main>
    );
  }
}

export default MapPart;
