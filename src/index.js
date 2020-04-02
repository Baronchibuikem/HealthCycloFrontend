import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact";
import "./components/App.css";

ReactDom.render(<App />, document.querySelector("#root"));
