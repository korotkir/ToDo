import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class NewItem extends React.Component {
 render() {
  return(
   <div className="newItem input-group">
    <input className="form-control" type="text"/>
    <button className="btn btn-outline-secondary" formAction="submit">Add</button>
   </div>
  )
 }
}

class TodoItem extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <div className="todoItem input-group mb-3">
    <div className="input-group-text">
     <input className="form-check-input mt-0" type="checkbox" />
    </div>
    <input type="text" className="form-control" value={this.props.value} />
   </div>
 )
 }
}

class TodoList extends React.Component {
 render() {
  return(
   <div className="todoList">
    <NewItem />
    <TodoItem value="Купить штаны"/>
    <TodoItem value="Слетать в Майами"/>
    <TodoItem value="Заценить клип Oxxy"/>
   </div>
  )
 }
}



ReactDOM.render(
 <TodoList />,
 document.getElementById('root')
);
