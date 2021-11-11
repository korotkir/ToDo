import React from "react";
import Item from "./Item";

class TodoItems extends React.Component {
 render() {
  return (
   [...this.props.items].map((el, i) =>
     <Item key={el.id}
           value={el.value}
           onClick={(e) => this.props.onClick(this.props.items[i], e)}
           items={this.props.items}
     />)
  )
 }
}

export default TodoItems
