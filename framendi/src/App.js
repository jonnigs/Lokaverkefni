import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import About from "./routes/About";
import Map from "./routes/Map";

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
            <Route path="/map/:id" exact component={Map} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
