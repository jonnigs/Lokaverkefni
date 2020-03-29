import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Helmet from "react-helmet";
import Iceland from "../../components/Iceland";
import { get, readPost } from "../../api";
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
    try {
      const data = await get("/climbingAreaData.json");
      if (data.error) {
        window.location("/error");
      }
      console.log(data);
    } catch (error) {
      console.error("Error fetching books", error);
      this.setState({ error: true, loading: false });
    }
    const response = await fetch(
      "https://notendur.hi.is/~jgs7/Lokaverkefni/service/climbingAreaData.json"
    );
    const data = await response.json();
    console.log(data);
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
      climbingAreasHTML = climbingAreas.map(t => (
        <p>
          <Link to="/about">{t.nafn}</Link>
        </p>
      ));
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
