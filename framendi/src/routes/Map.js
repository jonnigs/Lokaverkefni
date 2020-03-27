import React, { useState, useEffect, Component } from "react";
import Iceland from "../components/Iceland";
import Sudodata from "../sudodata.json";
import ClimbingAreaData from "../climbingAreaData.json";

console.log(Sudodata.results);

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      id: this.props.match.params.id
    };
  }

  async componentDidMount() {
    try {
      this.setState({ id: this.props.match.params.id, loading: false });
    } catch (error) {
      console.error("Error fetching books", error);
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { loading, error, id } = this.state;

    const landshluti = ClimbingAreaData.results.map(t => {
      if (id == t.id) {
        return <h1>{t.nafn}</h1>;
      }
    });

    const svaedi = ClimbingAreaData.results[0].svaedi.map(svaedi => (
      <p>{svaedi}</p>
    ));

    return (
      <main className="main">
        <Iceland />
        {landshluti}
        {svaedi}
      </main>
    );
  }
}

export default Map;
