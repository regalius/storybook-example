import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux";
import "./index.css";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
