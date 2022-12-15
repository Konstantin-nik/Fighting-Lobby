import React from "react";
import EquipField from "./EquipField";
import ItemList from "pages/ItemList";
import { useDispatch } from "react-redux"
import { useState } from "react"

import "./index.css";

function Lobby() {
	const [isListEnabled, changeList] = useState(false)
	const [itemList, setList] = useState()
	const dispatch = useDispatch()
	
	const handleStartClick = () => {
    	dispatch({ type: "changeMode", payload: "Fight" })
	}
	
	const handleOnCloseList = () => {
    	changeList(false)
    }
    
    const handleOnItemClick = (item_list) => {
    	setList(item_list)
    	changeList(!isListEnabled)
    }

	const Start = () => {
      return (
        <button id="start-button" onClick={handleStartClick}>
          Start
        </button>
      );
    };
    
    const UpField = () => {
      return isListEnabled ? <ItemList onCloseClick={handleOnCloseList} list={itemList}/> : null;
    };
    
    return (
      <>
        <UpField />
        <EquipField onItemClick={handleOnItemClick} />
        <Start />
      </>
    );
}

export default Lobby;
