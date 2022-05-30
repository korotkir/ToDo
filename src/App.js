import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import TodoList from "./todo/TodoList/TodoList"
import Login from './auth/login/Login'
import Version from './Version'
import Signup from './auth/signup/Signup'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList/>}/>
          <Route path="/ToDo" element={<TodoList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      <Version />
    </>
  )
}

