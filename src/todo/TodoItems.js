import React from "react";
import Item from "./items/Item";
import Start from "./items/animation/Start";
import Success from "./items/animation/Success"

class TodoItems extends React.Component {
 render() {
  return (
   this.props.items.length ?
   [...this.props.items].map((el, i) =>
     <Item key={el.id}
           value={el.value}
           onClick={(e) => this.props.onClick(this.props.items[i], e)}
           items={this.props.items}
     />) : <div className="animation__start"><Start /></div>
  )
 }
}

export default TodoItems
