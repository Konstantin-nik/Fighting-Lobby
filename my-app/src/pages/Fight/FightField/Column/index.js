import "./index.css";

import Item from "./Item";

function Column(props) {
  return (
    <div id="column">
      <Item name={props.name1} />
      <Item name={props.name2} />
      <Item name={props.name3} />
    </div>
  );
}

export default Column;
