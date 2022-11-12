import Column from "./Column";
import React from "react";

import stickman from "../../../pict/stickman.svg";
import "./index.css";

const Column1 = () => {
  return (
    <div id="column1">
      <input id="stickman-name" placeholder="Name" />
      <img alt="stickman" id="stickman-img" src={stickman}></img>
    </div>
  );
};

class EquipField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helmet: "Helmet",
      necklace: "Necklace",
      hand1: "Hand 1",
      hand2: "Hand 2",
      pants: "Pants",
      boots: "Boots",
    };
  }

  render() {
    return (
      <div id="stickman-equip-field">
        <Column
          onItemClick={this.props.onItemClick}
          name1={this.state.helmet}
          name2={this.state.hand1}
          name3={this.state.pants}
        />
        <Column1 />
        <Column
          onItemClick={this.props.onItemClick}
          name1={this.state.necklace}
          name2={this.state.hand2}
          name3={this.state.boots}
        />
      </div>
    );
  }
}

export default EquipField;
