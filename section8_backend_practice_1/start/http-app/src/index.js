import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Raven from "raven-js";

Raven.config("https://18f9ad32ea9c4e87a33a51929d2625ea@sentry.io/1400875", {
  release: "1-0-0",
  environment: "development-test"
}).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
