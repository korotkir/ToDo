import React from "react"
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
   series: false,
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
    value: '',
    isAnimation: true
   })
 }

 removeItem = (element) => {
  this.setState( {
   items : this.state.items.filter(item => item.id !== element.id),
   series: true,
   isAnimation: false
  })
 }

 render() {
  return(
   <div className="todoList">
    <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
    <div className="mainBlock">

      <TodoItems add={this.itemSubmit}
                 remove={this.removeItem}
                 items={this.state.items}
                 performed={this.performed}
                 series={this.state.series}
                 isAnimation={this.state.isAnimation}

      />
    </div>
    <TodoStatus total={this.state.items.length} done={this.state.done} />
   </div>
  )
 }
}

export default TodoList
