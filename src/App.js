import React from "react";
import "./App.css";
import Home from "./components/pages/Home.js";
import Favorites from "./components/pages/Favorites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
