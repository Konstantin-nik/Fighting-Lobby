import React from "react";
import "./index.css";

class Stickman extends React.Component {
  render() {
    const Column1 = () => {
      return (
        <div id="column1">
          <div id="stickman-name-lab">{this.props.name}</div>
          <img alt="stickman" id="stickman-img" src={this.props.stickman}></img>
        </div>
      );
    };
    return (
      <div id="stickman-field">
        <Column1 />
      </div>
    );
  }
}

export default Stickman;
