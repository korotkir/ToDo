import React from "react"
import store from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import TodoList from "./todo/TodoList/TodoList"
import Auth from "./auth/Auth"
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList/>}/>
          <Route path="/ToDo" element={<TodoList/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

