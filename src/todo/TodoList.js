import React from "react"
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "./themes"
import TodoItems from "./TodoItems"
import NewItem from "./NewItem"
import TodosSuccess from "./TodosSuccess"
import StatusBar from "./StatusBar";


class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   theme: 'light',
   value: '',
   items: [/*{id: 0, value: 'Купить штаны', checked: false}*/],
   checked: false,
   series: false,
   showModal: false,
   done: 0
  }
 }

 themeToggler = () => {
   this.state.theme === 'light' ? this.setState({ theme: 'dark' }) : this.setState({ theme: 'light' })
 }

 performed = (condition, index) => {
  
  let checkboxState = (i, bool) => {
   let copyItems = this.state.items.slice()
   copyItems[i].checked = bool
   this.setState({ items: [...copyItems] })
   console.log('items2', this.state.items);
  }

  if(condition === 'plus') {
    this.setState({ done: this.state.done + 1 })
    checkboxState(index, true)
   
    if (this.state.done + 1 === this.state.items.length) {
      this.setState( {showModal: true} )
   }
  }

  if(condition === 'minus') {
   this.setState({ done: this.state.done - 1 })
   checkboxState(index, false)
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
    items: [...this.state.items, {id: Math.random(), value: value, checked: this.state.checked}, ],
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
  
  element.checked && this.setState({ done: this.state.done - 1 })
 }

 onClear = () => {
  this.setState( {items: []} )
  this.setState({ showModal: false, done: 0, series: true } )
 }

 componentDidUpdate() {
  localStorage.setItem('done', JSON.stringify(this.state.done))
 }

 componentDidMount() {
   let itemStorage = JSON.parse(localStorage.getItem('items'))
   let doneStorage = localStorage.getItem('done')
 
  if(localStorage.items) {
    this.setState( {items: [...itemStorage] } )
  }

  if(Number(doneStorage) >= 1) {
    this.setState( {done: Number(doneStorage) } )
  } else {
      this.setState( {done: 0 } )
  }
 }

 componentWillUnmount() {
  // fix Warning: Can't perform a React state update on an unmounted component
  this.setState = (state,callback)=>{
      return;
  };
}

 render() {
  return(
  <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <div className="todoList">
        <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-lg-8 order-lg-1 order-2">
          <NewItem submit={this.itemSubmit} change={this.itemChange} value={this.state.value}/>
          </div>
          <div className="col-lg-2 order-xl-2 order-1">
          <StatusBar  themeToggler={this.themeToggler} />
          </div>
        </div>
          <div className="mainBlock row justify-content-center">
            <TodoItems add={this.itemSubmit}
                      remove={this.removeItem}
                      items={this.state.items}
                      performed={this.performed}
                      series={this.state.series}
                      isAnimation={this.state.isAnimation}
                      checked={this.state.checked}
                      done={this.state.done}
                      theme={this.state.theme}
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
  </ThemeProvider>
  )
 }
}

export default TodoList
