import React from "react";

import stickman from "pict/stickman.svg";
import "./index.css";
import Stickman from "./Stickman";

class FightField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "Steve",
    };
  }

  render() {
    return (
      <div id="fight-field">
        <Stickman name={this.state.playerName} stickman={stickman} />
        <h1>VS</h1>
        <Stickman name="Bot 1" stickman={stickman} />
      </div>
    );
  }
}

export default FightField;
