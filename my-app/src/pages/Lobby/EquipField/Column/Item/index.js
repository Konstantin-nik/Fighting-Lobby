import React from "react";
import "./index.css";

const idNames = {
  "Helmet": 0,
  "Necklace": 1,
  "Hand 1": 2,
  "Hand 2": 2,
  "Pants": 3,
  "Boots": 4,
};

const itemLists = [
  ["Leather Helmet", "Iron Helmet", "Diamond Helmet", "Chain Helmet"], 
  [
    "Chain",
    "Choker",
    "Collar",
    "Graduated",
    "Lariat",
    "Lavalier",
    "Diamond Locket",
  ], //Necklace
  [
    "Wooden Sword",
    "Stone Sword",
    "Iron Sword",
    "Gold Sword",
    "Diamond Sword",
    "Wooden Shield",
    "Stone Shield",
    "Iron Shield",
    "Wooden Staff",
    "Gold Staff",
    "Diamond Staff",
    "Ruby Staff",
    "Bow",
  ], //Hands
  ["Leather Pants", "Iron Pants", "Diamond Pants", "Chain Pants"], //Pants
  [
    "Leather Boots",
    "Iron Boots",
    "Hard Leather Boots",
    "Half-Iron Boots",
    "Ostrich Boots",
  ], //Boots
];

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      item_name: null,
      item_picture: "",
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onItemClick(
      itemLists[idNames[this.props.name]]
      );
  }

  render() {
    return (
      <div id="item-equip-field" onClick={this.handleClick}>
        {this.state.item_name === null ? this.props.name : this.state.item_name}
      </div>
    );
  }
}

export default Item;
