import React from "react";
import TodoItems from "./TodoItems"
import NewItem from "./NewItem"
import TodoStatus from "./TodoStatus"

class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   value: '',
   items: [/*{id: 0, value: 'Купить штаны'}*/],
   checked: false,
   done: 0
  }
 }

 performed = (condition) => {
  if(condition === 'plus') {
   this.setState({done: this.state.done + 1})
  }
  if(condition === 'minus') {
   this.setState({done: this.state.done - 1})
  }
 }

 // done = (element, event) => {
 //  event.target.className = this.state.task
 //
 //  this.setState({ checked: !this.state.checked })
 //
 //  !this.state.checked
 //   ? this.setState({
 //    task: [...this.state.task, 'task'],
 //    backgroundForm: [...this.state.backgroundForm, 'success'],
 //   })
 //   : this.setState({
 //    task: [...this.state.task].splice(0,1),
 //    backgroundForm: [...this.state.backgroundForm].splice(0,1)
 //   })
 // }

 itemChange = (event) => {
  this.setState({ value: event.target.value })
 }

 itemSubmit = (event) => {
  event.preventDefault()
  let value = this.state.value.trim('')
  value === ''
   ? this.setState({value: ''})
   : this.setState({
    items: [...this.state.items, {id: Math.random(), value: value}],
    value: ''
   })
 }

 removeItem = (element) => {
  this.setState( { items : this.state.items.filter(item => item.id !== element.id) })
 }

 render() {
  return(
   <div className="todoList">
    <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
    <div className="mainBlock">
       <TodoItems onClick={this.removeItem}
                  items={this.state.items}
                  // backgroundForm={this.state.backgroundForm}
                  // OnChange={this.done}
                  // defaultChecked={this.state.checked}
                  // task={this.state.task}
                  performed={this.performed}
       />
    </div>
    <TodoStatus total={this.state.items.length} done={this.state.done} />
   </div>
  )
 }
}

export default TodoList
