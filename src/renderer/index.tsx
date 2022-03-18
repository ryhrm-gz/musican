import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
