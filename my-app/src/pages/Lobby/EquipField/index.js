import Item from "./Item";

import stickman from "../../../pict/stickman.gif";

import "./index.css";

function EquipField() {
  return (
    <>
      <div id="stickman-equip-field">
        <div id="column">
          <Item />
          <Item />
          <Item />
        </div>
        <div id="column1">
          <input id="stickman-name" placeholder="Name" />
          <img alt="stickman" id="stickman-img" src={stickman}></img>
        </div>
        <div id="column">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}

export default EquipField;
