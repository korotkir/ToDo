import React from "react";
import {Trash} from "react-bootstrap-icons";

class Item extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   checked: false,
   success: {},
   task: ['form-control'],
   backgroundForm: ['input-group-text'],
   bounce: false,
  }
 }

 remove = () => {
  this.setState({ bounce: '2s' })
  this.state.checked && this.props.performed('minus')
  this.props.remove()
 }

 done = () => {
  this.setState({ checked: !this.state.checked })

  if(!this.state.checked) {
   this.props.performed('plus', this.props.index)
   this.setState({
    task: [...this.state.task, 'task'],
    backgroundForm: [...this.state.backgroundForm, 'success'],
   })
  } else {
     this.props.performed('minus', this.props.index)
     this.setState({
       task: [...this.state.task].splice(0,1),
       backgroundForm: [...this.state.backgroundForm].splice(0,1),
     })
    }
 }

//  componentDidUpdate() {
//   console.log(this.props.items);
//  }

//  componentDidMount() {
//   console.log(this.props.index);
//  }

//  componentDidMount() {}

render() {
  return(
    <div className="todoItem input-group col-6">
     <div className={[...this.state.backgroundForm].join(' ')}>
      <input className="form-check-input mt-0" type="checkbox" onChange={this.done} key={this.props.key}/>
     </div>
     <input type="text" className={[...this.state.task].join(' ')} defaultValue={this.props.value}/>
     <Trash className="trash" size={25} onClick={this.remove}/>
    </div>
  )
 }
}

export default Item
