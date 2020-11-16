import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./reset.css";
import "./App.css";

import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
