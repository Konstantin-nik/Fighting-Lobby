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

function EquipField() {
  return (
    <div id="stickman-equip-field">
      <Column name1="EQ 1" name2="EQ 2" name3="EQ 3" />
      <Column1 />
      <Column name1="EQ 4" name2="EQ 5" name3="EQ 6" />
    </div>
  );
}

export default EquipField;
