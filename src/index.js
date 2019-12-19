import "./style.css";

import React, { Component } from "react";
import { render } from "react-dom";

import PlyrComponent from "./PlyrComponent";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="plyrwrapper">
        <PlyrComponent />
        <p>The example of react plyr</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
