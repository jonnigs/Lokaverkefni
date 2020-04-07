import React, { Component } from "react";
import API from "../../fake-api.js";

class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      area: ""
    };
  }

  async componentDidMount() {
    const endpoint = `/${this.state.id}`;
    const data = API.getTemp2(endpoint);
    this.setState({ data });
  }

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
    const { id, area, data } = this.state;

    let heading;
    let headPhoto;
    let um;
    let model;
    let sectors;

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
          <a onClick={this.fullscreen}>
            <p>Full Screen</p>
          </a>
        </div>
      );
      sectors = data.results[0].sectors.map(sector => {
        const href = window.location.pathname + "?sector=" + sector.id;
        return (
          <a key={sector.id} href={href}>
            <p>{sector.nafn}</p>
          </a>
        );
      });
    }

    return (
      <main className="main">
        {headPhoto}
        <p>Area</p>
        {heading}
        {um}
        {sectors}
        {model}
      </main>
    );
  }
}

export default Area;
