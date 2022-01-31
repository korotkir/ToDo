import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import TodoList from "./todo/TodoList"
import Auth from "./auth/Auth"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </BrowserRouter>
  )
}

