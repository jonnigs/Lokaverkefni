import React, { Component } from "react";
//import Helmet from "react-helmet";
import Iceland from "../../components/Iceland";
import ClimbingAreaData from "../../climbingAreaData.json";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      id: this.props.match.params.id,
      countryPart: "",
      climbingAreas: ""
    };

    this.changeCountryPart = this.changeCountryPart.bind(this);
  }

  async componentDidMount() {
    window.addEventListener("click", () => {
      this.changeCountryPart(this.props.match.params.id);
    });
  }

  changeCountryPart(part) {
    this.setState({ id: part });
    ClimbingAreaData.results.map(hluti => {
      if (hluti.id == part) {
        this.setState({ countryPart: hluti.nafn, climbingAreas: hluti.svaedi });
      }
    });
  }

  render() {
    const { loading, error, id, countryPart, climbingAreas } = this.state;
    console.log(climbingAreas);

    let climbingAreasHTML;
    if (climbingAreas) {
      climbingAreasHTML = climbingAreas.map(t => <p>{t}</p>);
    }
    return (
      <main className="main">
        <div>
          <Iceland />
        </div>
        <h1>{countryPart}</h1>
        {climbingAreasHTML}
      </main>
    );
  }
}

export default Map;
