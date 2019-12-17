import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import FirstPage from "./components/FirstPage";
import "./tailwind.css";
import SecondPage from "./components/SecondPage";

const App = () => (
  <Router>
    <FirstPage path="/1" />
    <SecondPage path="/2" />
  </Router>
);

render(<App />, document.getElementById("App"));
