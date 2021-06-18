import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
