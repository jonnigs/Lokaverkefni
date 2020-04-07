import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/home";
import About from "./routes/about";
import Map from "./routes/map";
import MapPart from "./routes/mapPart";
import Area from "./routes/area";
//import Sector from "./routes/sector";
//import Subsector from "./routes/subsector";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/map" exact component={Map} />
            <Route path="/map/:id" component={MapPart} />
            <Route path="/climbingarea/:id" exact component={Area} />
            {/* Subsector*/}
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
