import React from "react";
import { useSelector } from "react-redux"

import Lobby from "./pages/Lobby";
import Fight from "./pages/Fight";

function App() {
  
  const mode = useSelector( state => state.mode )
  
  if (mode === "Fight") {
    return (
        <Fight />
    );
  } else if (mode === "Lobby") {
    return (<>
        <Lobby />
        <p> {mode} </p>
        </>
    );
  }
}

export default App;
