import React from "react";

class TodoStatus extends React.Component {
 render() {
  return(
   <h3 className="status">{this.props.completed}/{this.props.total}</h3>
  )
 }
}

export default TodoStatus
