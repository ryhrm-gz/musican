import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { App } from "./components/App";

import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
