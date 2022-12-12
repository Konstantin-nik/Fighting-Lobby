import React from "react";
import { configureStore } from '@reduxjs/toolkit'

import Lobby from "./pages/Lobby";
import Fight from "./pages/Fight";

function App() {
  //const [mode, setMode] = useState("Lobby");
  
  const initialState = { mode: "Lobby" }
  
  //Action Creator
  const changeMode = (e) => {
    return {
      type: 'mode/modeChanged',
      mode: e,
    }
  }
  
  const f = changeMode("Fight")
  
  //Reducer
  function modeReducer(state = initialState, action) {
    if (action.type === 'mode/modeChanged') {
      return {
        mode: action.mode,
      }
    }
    return state;
  }
  
  //store
  const store = configureStore({ reducer: modeReducer })
  
  //Selector
  const selectMode = state => state.mode;
  
  const currentMode = selectMode(store.getState())
  
  const handleChangeMode = (e) => {
    store.dispatch(e)
  }
  
  if (currentMode === "Fight") {
    return (
        <Fight onModeChange={handleChangeMode} />
    );
  } else if (currentMode === "Lobby") {
    return (<>
        <Lobby onModeChange={handleChangeMode}/>
        <p> {selectMode(store.getState())} </p>
        </>
    );
  }
}

export default App;
