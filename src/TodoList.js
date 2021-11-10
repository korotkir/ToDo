import React from "react";
import TodoItem from "./TodoItem"
import NewItem from "./NewItem"
import TodoStatus from "./TodoStatus"

class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   completed: '',
   value: '',
   items: [
    {id: 0, value: 'Купить штаны'},
    {id: 1, value: 'Слетать в Тайланд'},
    {id: 2, value: 'Купить наушники'},
    {id: 3, value: 'test'}
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

 removeItem = (element, event) => {
  this.setState( { items : this.state.items.filter(item => item.id !== element.id) })
 }

 render() {
  return(
   <div className="todoList">
    <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
    <div className="mainBlock">
     {this.state.items.length
      ? this.state.items.map((el, i) =>
       <TodoItem key={el.id}
                 value={el.value}
                 onClick={(e) => this.removeItem(this.state.items[i], e)}
       />)
      : <h1 className="empty">Список пуст!</h1>}
    </div>
    <TodoStatus total={this.state.items.length} completed={this.state.completed.length}/>
   </div>
  )
 }
}

export default TodoList
