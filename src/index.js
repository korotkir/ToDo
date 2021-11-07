import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { Trash } from 'react-bootstrap-icons';

class NewItem extends React.Component {
 render() {
  const dictNewItem = [
   'Сходить в спортзал',
   'Купить молоко',
   'Заплатить налоги',
   'Заказать телефон',
   'Позвонить Лехе',
   'Навестить бабулю']
  let randomizerForNewItem = Math.floor(Math.random() * dictNewItem.length)
  let placeholderNewItem = `Например: ${dictNewItem[randomizerForNewItem]}`

  return(
   <form
    className="newItem input-group"
    onSubmit={this.props.submit}
   >
    <input
     className="form-control"
     type="text"
     placeholder={placeholderNewItem}
     onChange={this.props.change}
     value={this.props.value}
    />
    <button className="btn btn-outline-secondary" type="submit" >Добавить</button>
   </form>
  )
 }
}

class TodoItem extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   checked: false,
   task: ['form-control'],
   backgroundForm: ['input-group-text']
  }
 }

 done = () => {
   this.setState({ checked: !this.state.checked })

   !this.state.checked
    ? this.setState({
     task: [...this.state.task, 'task'],
     backgroundForm: [...this.state.backgroundForm, 'success'] })
    : this.setState({
     task: [...this.state.task].splice(0,1),
     backgroundForm: [...this.state.backgroundForm].splice(0,1) })
  }

  render() {
  return(
   <div className="todoItem input-group mb-3" >
    <div className={this.state.backgroundForm.join(' ')}>
     <input className="form-check-input mt-0" type="checkbox" onChange={this.done} defaultChecked={this.state.checked}/>
    </div>

    <input type="text" className={this.state.task.join(' ')} defaultValue={this.props.value} />
    <Trash className="trash" size={25} onClick={this.props.onClick}/>
   </div>
 )
 }
}

class TodoStatus extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <h3 className="status">Выполнено 5/{this.props.total}</h3>
  )
 }
}

class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = { value: '',
   items: [
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
  // TODO:
  console.log(this.state.items)
  let value = this.state.value.trim('')
  value === ''
   ? this.setState({value: ''})
   : this.setState({
   // items: [...this.state.items, {id: this.state.items.length, value: value}],
    items: [...this.state.items, {id: Math.random(), value: value}],
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
       <TodoItem key={el.id} value={el.value} onClick={(e) => this.removeItem(this.state.items[i], e)}/>)
      : <h1 className="empty">Список пуст!</h1>}
   </div>
    <TodoStatus total={this.state.items.length}/>
   </div>
  )
 }
}



ReactDOM.render(
 <TodoList />,
 document.getElementById('root')
);
