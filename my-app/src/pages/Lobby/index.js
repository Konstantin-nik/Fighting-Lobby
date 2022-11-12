import React from "react";
import EquipField from "./EquipField";
import ItemList from "pages/ItemList";

import "./index.css";

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleOnItemClick = this.handleOnItemClick.bind(this);
    this.handleOnCloseList = this.handleOnCloseList.bind(this);
    this.state = {
      isItemListEnabled: false,
      item_list: null,
    };
  }

  handleStartClick() {
    this.props.onModeChange("Fight");
    console.log("log2");
  }

  handleOnItemClick(item_list) {
    console.log("log1");
    this.setState({
      isItemListEnabled: !this.state.isItemListEnabled,
      item_list: item_list,
    });
  }

  handleOnCloseList() {
    this.setState({
      isItemListEnabled: false,
    });
  }

  render() {
    const Start = () => {
      return (
        <button id="start-button" onClick={this.handleStartClick}>
          Start
        </button>
      );
    };
    let UpField = () => {
      return this.state.isItemListEnabled ? <ItemList onCloseClick={this.handleOnCloseList} list={this.state.item_list}/> : null;
    };
    return (
      <>
        <UpField />
        <EquipField onItemClick={this.handleOnItemClick} />
        <Start />
      </>
    );
  }
}

export default Lobby;
