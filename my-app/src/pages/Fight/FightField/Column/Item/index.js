import React from "react";
import "./index.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      item_name: null,
      item_picture: "",
    };
  }

  onClick() {}

  render() {
    return (
      <div id="item-equip-field" onClick={this.onClick}>
        {this.state.item_name === null ? this.props.name : this.state.item_name}
      </div>
    );
  }
}

export default Item;
