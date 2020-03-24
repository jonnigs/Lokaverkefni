import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Heim</li>
          </Link>
          <Link to="/map">
            <li>Kort</li>
          </Link>
          <Link to="/about">
            <li>Um</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
