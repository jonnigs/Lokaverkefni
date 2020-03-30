import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IcelandPart.css";
import vestfirdirSumar from "../../images/maps/vestfirdir-sumar.svg";
import vestfirdirVetur from "../../images/maps/vestfirdir-vetur.svg";
import vesturlandSumar from "../../images/maps/vesturland-sumar.svg";
import vesturlandVetur from "../../images/maps/vesturland-vetur.svg";
import hofudborgarsvaedidSumar from "../../images/maps/hofudborgarsvaedid-sumar.svg";
import hofudborgarsvaedidVetur from "../../images/maps/hofudborgarsvaedid-vetur.svg";
import sudurlandSumar from "../../images/maps/sudurland-sumar.svg";
import sudurlandVetur from "../../images/maps/sudurland-vetur.svg";
import austurlandSumar from "../../images/maps/austurland-sumar.svg";
import austurlandVetur from "../../images/maps/austurland-vetur.svg";
import nordurlandSumar from "../../images/maps/nordurland-sumar.svg";
import nordurlandVetur from "../../images/maps/nordurland-vetur.svg";
import midhalendiSumar from "../../images/maps/midhalendi-sumar.svg";
import midhalendiVetur from "../../images/maps/midhalendi-vetur.svg";
import vatnajokullSumar from "../../images/maps/vatnajokull-sumar.svg";
import vatnajokullVetur from "../../images/maps/vatnajokull-vetur.svg";

const partOptions = [
  vestfirdirSumar,
  vestfirdirVetur,
  vesturlandSumar,
  vesturlandVetur,
  hofudborgarsvaedidSumar,
  hofudborgarsvaedidVetur,
  sudurlandSumar,
  sudurlandVetur,
  austurlandSumar,
  austurlandVetur,
  nordurlandSumar,
  nordurlandVetur,
  midhalendiSumar,
  midhalendiVetur,
  vatnajokullSumar,
  vatnajokullVetur
];

class IcelandPart extends Component {
  render() {
    console.log(this.props.whichPart);
    return (
      <div className="icelandpart">
        <p>{this.props.whichPart}</p>
      </div>
    );
  }
}

export default IcelandPart;
