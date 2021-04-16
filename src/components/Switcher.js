import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./Card";
import Contacto from "./Contacto";
import Footer from "./Footer";
import Gestion from "./Gestion";
import Header from "./Header";
import Inicio from "./Inicio";

export default class Switcher extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/* <Route path="https://franbcn93.github.io/react_web/" exact> */}
          {/* <Route path={["/", "/react_web"]} exact> */}
          <Route path={["/", "/web_tnk_hospitales"]} exact>
            <Card />
          </Route>
          <Route path="/gestion">
            <Gestion />
          </Route>
          <Route path="/hospitales">
            <Inicio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
