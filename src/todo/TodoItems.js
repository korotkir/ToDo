import React from "react";
import Item from "./items/Item";
import Start from "./items/animation/Start";
// import Success from "./items/animation/Success"

class TodoItems extends React.Component {

 render() {
  return (
   this.props.items.length ?
   [...this.props.items].map((el, i) =>
     <Item key={el.id}
           value={el.value}
           onClick={(event) => this.props.onClick(this.props.items[i], event)}
           items={this.props.items}
           performed={this.props.performed}
           // backgroundForm={this.props.backgroundForm}
           // OnChange={(event) => this.props.OnChange(this.props.items[i], event)}
           // defaultChecked={this.props.checked}
           // task={this.props.task}
     />) : <div className="animation__start"><Start /></div>
  )
 }
}

export default TodoItems
