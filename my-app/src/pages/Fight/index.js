import FightField from "./FightField";
import React from "react";

import "./index.css";

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onModeChange("Lobby");
  }

  render() {
    const ExitButton = () => {
      return (
        <button id="exit-button" onClick={this.handleClick}>
          Exit
        </button>
      );
    };

    const TurnButton = () => {
      return <button id="turn-button">Turn</button>;
    };

    return (
      <>
        <FightField />
        <TurnButton />
        <ExitButton />
      </>
    );
  }
}

export default Fight;
