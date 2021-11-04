import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

// class Trash extends React.Component {
//  render() {
//   return(
//    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//    </svg>
//   )
//  }
// }

class NewItem extends React.Component {
 constructor(props) {
  super(props);
  this.state = {value: ''}

 }

 itemChange = (event) => {
  this.setState({ value: event.target.value })
 }

 itemSubmit = (event) => {
  event.preventDefault()
  console.log(this.state.value)
 }

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
    onSubmit={this.itemSubmit}
   >
    <input
     className="form-control"
     type="text"
     placeholder={placeholderNewItem}
     value={this.state.value}
     onChange={this.itemChange}
    />
    <button className="btn btn-outline-secondary" type="submit" >Add</button>
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
   <div className="todoItem input-group mb-3">

    <div className={this.state.backgroundForm.join(' ')}>
     <input className="form-check-input mt-0" type="checkbox" onChange={this.done} defaultChecked={this.state.checked}/>
    </div>
    <input type="text" className={this.state.task.join(' ')} defaultValue={this.props.value} />
   </div>
 )
 }
}

class TodoList extends React.Component {
 render() {

  let items = [
   {id: 1, value: 'Купить штаны'},
   {id: 2, value: 'Слетать в Тайланд'},
   {id: 3, value: 'Купить наушники'},
  ]

  return(
   <div className="todoList">
    <NewItem />
    { items.map(el => <TodoItem key={el.id} value={el.value} />) }
   </div>
  )
 }
}



ReactDOM.render(
 <TodoList />,
 document.getElementById('root')
);
