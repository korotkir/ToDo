import React from "react"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import TodoItems from "./TodoItems"
import NewItem from "./NewItem"

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
    <div className="container-fluid">
     <div className="row justify-content-center">
      <div className="col-xs-12 col-sm-10 col-md-8">
       <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
      </div>
     </div>
      <div className="mainBlock row justify-content-center">
        <TodoItems add={this.itemSubmit}
                   remove={this.removeItem}
                   items={this.state.items}
                   performed={this.performed}
                   series={this.state.series}
                   isAnimation={this.state.isAnimation}
        />
      </div>
      <div className="row justify-content-center">
        <h3 className="status col-auto">Выполнено: {this.state.done} из {this.state.items.length}</h3>
      </div>
     </div>
   </div>
  )
 }
}

export default TodoList
