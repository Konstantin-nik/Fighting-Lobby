import "./index.css";

import Item from "./Item";

function Column(props) {
  return (
    <div id="column">
      <Item name={props.name1} onItemClick={props.onItemClick} />
      <Item name={props.name2} onItemClick={props.onItemClick} />
      <Item name={props.name3} onItemClick={props.onItemClick} />
    </div>
  );
}

export default Column;
