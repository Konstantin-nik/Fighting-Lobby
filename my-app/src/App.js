import React, { useState } from "react";
import Lobby from "./pages/Lobby";
import Fight from "./pages/Fight";

function App() {
  const [mode, setMode] = useState("Lobby");
  const handleChangeMode = (e) => {
    setMode(e)
  }
  if (mode === "Fight") {
      return (
        <Fight mode={mode} onModeChange={handleChangeMode} />
      );
    } else if (mode === "Lobby") {
      return (
        <Lobby mode={mode} onModeChange={handleChangeMode} />
      );
    }
}

export default App;
