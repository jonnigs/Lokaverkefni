import React, { Component } from "react";
//import Helmet from "react-helmet";
import Iceland from "../components/Iceland";
import ClimbingAreaData from "../climbingAreaData.json";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      id: this.props.match.params.id,
      part: "",
      areas: ""
    };

    this.changeCountryPart = this.changeCountryPart.bind(this);
  }

  async componentDidMount() {
    window.addEventListener("click", () => {
      this.changeCountryPart(this.props.match.params.id);
      this.setData(this.props.match.params.id);
    });
  }

  changeCountryPart(part) {
    this.setState({ id: part });
  }

  setData() {
    ClimbingAreaData.results.map(hluti => {
      if (hluti.id == this.state.id) {
        this.setState({ part: hluti.nafn, areas: hluti.svaedi });
      }
    });
  }

  render() {
    const { loading, error, id, part, areas } = this.state;
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number => <li>{number}</li>);
    //const climbingAreas = areas.map(a => <p>{a}</p>);
    return (
      <main className="main">
        <div>
          <Iceland />
        </div>
        <h1>{part}</h1>
        <p>{id}</p>
        {listItems}
      </main>
    );
  }
}

export default Map;
