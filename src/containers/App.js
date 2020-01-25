import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/common/header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}
