import Column from "./Column";
import React from "react";

import stickman from "../../../pict/stickman.gif";
import "./index.css";

const Column1 = () => {
  return (
    <div id="column1">
      <input id="stickman-name" placeholder="Name" />
      <img alt="stickman" id="stickman-img" src={stickman}></img>
    </div>
  );
};

function EquipField() {
  return (
    <div id="stickman-equip-field">
      <Column />
      <Column1 />
      <Column />
    </div>
  );
}

export default EquipField;
