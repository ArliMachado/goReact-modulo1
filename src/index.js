import React, { Components } from "react";
import { render } from "react-dom";

class App extends Components {
  render() {
    return <h1>Hello</h1>;
  }
}

render(<App />, document.getElementById("app"));
