import React from "react";
import EquipField from "./EquipField";

import "./index.css";

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onModeChange("Fight");
  }

  render() {
    const Start = () => {
      return (
        <button id="start-button" onClick={this.handleClick}>
          Start
        </button>
      );
    };
    return (
      <>
        <EquipField />
        <Start />
      </>
    );
  }
}

export default Lobby;
