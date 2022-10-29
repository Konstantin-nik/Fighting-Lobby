import EquipField from "./EquipField";

import "./index.css";

const Start = () => {
  return <button id="start-button">Start</button>;
};

function Lobby() {
  return (
    <>
      <EquipField />
      <Start />
    </>
  );
}

export default Lobby;
