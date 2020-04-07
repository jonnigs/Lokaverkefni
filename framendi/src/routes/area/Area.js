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
        <iframe
          title="A 3D model"
          width="640"
          height="480"
          src={data.results[0].model}
          frameBorder="0"
          allow="autoplay; fullscreen;"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      );
      sectors = data.results[0].sectors.map(sector => {
        const href = window.location.pathname + "/" + sector.id;
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
