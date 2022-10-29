import "./Lobby.css";
import stickman from "./pict/stickman.gif";

function Lobby() {
  return (
    <>
      <div id="stickman-equip-field">
        <div id="column">
          <div id="item-equip-field">EQ 1</div>
          <div id="item-equip-field">EQ 2</div>
          <div id="item-equip-field">EQ 3</div>
        </div>
        <div id="column1">
          <input id="stickman-name" placeholder="Name" />
          <img alt="stickman" id="stickman-img" src={stickman}></img>
        </div>
        <div id="column">
          <div id="item-equip-field">EQ 4</div>
          <div id="item-equip-field">EQ 5</div>
          <div id="item-equip-field">EQ 6</div>
        </div>
      </div>
      <button id="start-button">Start</button>
    </>
  );
}

export default Lobby;
