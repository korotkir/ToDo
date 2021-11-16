import React from "react";
import Item from "./items/Item";
import Start from "./items/animation/Start";
import Success from "./items/animation/Success";
import {CSSTransition} from "react-transition-group";

class TodoItems extends React.Component {
 render() {
  return (
    this.props.items.length ?
   [...this.props.items].map((el, i) =>
     <CSSTransition transitionName="alert">
      {<Item key={el.id}
            value={el.value}
            remove={() => this.props.remove(this.props.items[i])}
            items={this.props.items}
            performed={this.props.performed}
     />} </CSSTransition>) : <div className="animation__start">{!this.props.series ? <Start /> : <Success />}</div>
  )
 }
}

export default TodoItems
