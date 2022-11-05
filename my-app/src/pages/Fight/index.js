import FightField from "./FightField";
import React from "react";

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
        <button id="start-button" onClick={this.handleClick}>
          Exit
        </button>
      );
    };
    return (
      <>
        <FightField />
        <ExitButton />
      </>
    );
  }
}

export default Fight;
