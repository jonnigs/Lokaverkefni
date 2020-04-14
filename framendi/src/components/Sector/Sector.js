import React, { Component } from "react";

class Sector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
      data: this.props.data
    };

    this.getSectorData = this.getSectorData.bind(this);
  }

  componentDidMount() {
    this.getSectorData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.getSectorData();
      this.setState({ query: this.props.query });
    }
  }

  getSectorData = () => {
    this.state.data.results[0].sectors.map(sector => {
      if (sector.id === this.props.query.split("=")[1]) {
        this.setState({
          name: sector.nafn,
          about: sector.um,
          img: sector.sectorPhoto,
          model: sector.model
        });
      }
      return 1;
    });
  };

  render() {
    const { name, about, img, model } = this.state;

    let topo;
    if (model) {
      topo = (
        <iframe
          id="model"
          title="A 3D model"
          width="640"
          height="480"
          src={model}
          frameBorder="0"
          allow="autoplay; fullscreen;"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      );
    }
    return (
      <div>
        <h1>{name}</h1>
        <p>{about}</p>
        <img alt="Yfirlitsmynd af klifursvæðinu" src={img} />
        {topo}
      </div>
    );
  }
}

export default Sector;
