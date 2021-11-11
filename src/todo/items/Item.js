import React from "react";
import {Trash} from "react-bootstrap-icons";


class Item extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   checked: false,
   task: ['form-control'],
   backgroundForm: ['input-group-text'],
  }
 }

 done = () => {
  this.setState({ checked: !this.state.checked })

  !this.state.checked
   ? this.setState({
    task: [...this.state.task, 'task'],
    backgroundForm: [...this.state.backgroundForm, 'success'],
   })
   : this.setState({
    task: [...this.state.task].splice(0,1),
    backgroundForm: [...this.state.backgroundForm].splice(0,1)
   })
 }

 render() {
  return(
  <div className="todoItem input-group mb-3">
   <div className={[...this.state.backgroundForm].join(' ')}>
    <input className="form-check-input mt-0" type="checkbox" onChange={this.done} defaultChecked={this.state.checked}/>
   </div>

   <input type="text" className={[...this.state.task].join(' ')} defaultValue={this.props.value}/>
   <Trash className="trash" size={25} onClick={this.props.onClick}/>
  </div>
  )
 }
}

export default Item