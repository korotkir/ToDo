import React from "react";
import TodoItems from "./TodoItems"
import NewItem from "./NewItem"
import TodoStatus from "./TodoStatus"

class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   completed: '',
   value: '',
   items:
    [
    // {id: 0, value: 'Купить штаны'},
    // {id: 1, value: 'Слетать в Тайланд'},
    // {id: 2, value: 'Купить наушники'},
    // {id: 3, value: 'test'}
   ]}
 }

 itemChange = (event) => {
  this.setState({ value: event.target.value })
 }

 itemSubmit = (event) => {
  event.preventDefault()
  let value = this.state.value.trim('')
  value === ''
   ? this.setState({value: ''})
   : this.setState({
    items: [...this.state.items, {id: this.state.items.length, value: value}],
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
       />
    </div>
    <TodoStatus total={this.state.items.length} completed={this.state.completed.length}/>
   </div>
  )
 }
}

export default TodoList
