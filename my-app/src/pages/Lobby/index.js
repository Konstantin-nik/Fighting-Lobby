import EquipField from "./EquipField";

import "./index.css";

const Start = () => {
  return <button id="start-button">Start</button>;
};

function Lobby() {
  return (
    <>
      <EquipField id="stickman-equip-field" />
      <Start />
    </>
  );
}

export default Lobby;
