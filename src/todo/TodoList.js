import React from "react"
import TodoItems from "./TodoItems"
import NewItem from "./NewItem"
import TodosSuccess from "./TodosSuccess"
import StatusBar from "./StatusBar";

class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   value: '',
   items: [/*{id: 0, value: 'Купить штаны'}*/],
   checked: false,
   series: false,
   done: 0,
   showModal: false
  }
 }

 performed = (condition) => {
  if(condition === 'plus') {
   this.setState({done: this.state.done + 1})
   if (this.state.done + 1 === this.state.items.length) {
    this.setState( {showModal: true} )
   }
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
  this.setState({
   items: this.state.items.filter(item => item.id !== element.id),
   series: true,
   isAnimation: false,
  })
 }

 onClear = () => {
  this.setState( {items: []} )
  this.setState({ showModal: false, done: 0, series: true } )

 }

 render() {
  return(
   <div className="todoList">
    <div className="container-fluid">
     <div className="row justify-content-center">
      <div className="col-xs-12 col-sm-10 col-md-8">
       <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
      </div>
      <div className="col-xs-0 col-sm-1 col-md-2">
       <StatusBar />
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
    <TodosSuccess
     show={this.state.showModal}
     onHide={() => this.setState({ showModal: false } )}
     onClear={this.onClear}
    />
   </div>
  )
 }
}

export default TodoList
