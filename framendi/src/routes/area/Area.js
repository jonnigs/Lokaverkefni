import React, { Component } from "react";
import Sector from "../../components/Sector";
import API from "../../fake-api.js";

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      query: "",
      area: ""
    };

    this.getQueryValue = this.getQueryValue.bind(this);
    this.setQueryValue = this.setQueryValue.bind(this);
  }

  async componentDidMount() {
    const endpoint = `/${this.state.id}`;
    const data = API.getTemp2(endpoint);
    this.setState({ data });
    const query = this.props.location.search;

    this.setQueryValue(query);
  }

  async componentDidUpdate() {
    this.updateURLParameter();
  }

  getQueryValue = () => {
    const query = this.props.location.search;
    return query;
  };

  setQueryValue = query => {
    this.setState({ query });
    this.updateURLParameter();
  };

  updateURLParameter = () => {
    const URLBase = this.props.location.pathname;
    const URL = URLBase + this.state.query;
    window.history.pushState("page2", "Title", URL);
  };

  leidir = () => {
    console.log(this.state.data.results[0].leidir);
  };

  fullscreen = () => {
    const elem = document.getElementById("model");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      console.log("her");

      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  render() {
    const { id, area, data, query } = this.state;

    let heading;
    let headPhoto;
    let um;
    let model;
    let sectors;
    let sector;

    if (query) {
      sector = <Sector data={data} query={query} />;
    }

    if (data) {
      heading = <h1>{data.results[0].nafn}</h1>;
      headPhoto = (
        <img
          alt="Yfirlitsmynd af klifursvæðinu"
          src={data.results[0].headPhoto}
        />
      );
      um = <p>{data.results[0].um}</p>;
      model = (
        <div>
          <iframe
            id="model"
            title="A 3D model"
            width="640"
            height="480"
            src={data.results[0].model}
            frameBorder="0"
            allow="autoplay; fullscreen;"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          <p onClick={this.fullscreen}>Full Screen</p>
        </div>
      );
      sectors = data.results[0].sectors.map(sector => {
        const query = "?sector=" + sector.id;
        return (
          <p key={sector.id} onClick={() => this.setQueryValue(query)}>
            {sector.nafn}
          </p>
        );
      });
    }

    return (
      <main className="main">
        {headPhoto}
        <p>Area</p>
        {heading}
        {um}
        <p onClick={this.leidir}>Skoða allar leiðir</p>
        {sectors}
        {/*model*/}
        {sector}
      </main>
    );
  }
}

export default Area;
