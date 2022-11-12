import React from "react";
import "./index.css";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleOnCloseClick = this.handleOnCloseClick.bind(this);
  }

  handleOnCloseClick() {
    this.props.onCloseClick();
  }

  render() {
    const item_list = this.props.list.map((item) => <li key={item}>{item}</li>);
    return (
      <div id="shadow" onClick={this.handleOnCloseClick}>
        <div id="item-list-container">
          TAKE ONE AND LEAVE ME ALONE!
          <br />
          <ul>{item_list}</ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
