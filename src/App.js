import React, {useEffect} from 'react'
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
import {useDispatch, useSelector} from 'react-redux'
import {authSuccess} from './store/actions/auth'
import NotFound from './NotFound/NotFound'

export default function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const isUser = (
    <Routes>
      <Route path="/" element={<TodoList/>}/>
      <Route path="/login" element={<TodoList/>}/>
      <Route path="/signup" element={<TodoList/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )

  const isAnonim = (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )

  useEffect(() => {
    const id = localStorage.getItem('id')
    id && dispatch(authSuccess(true))
  })

  return (
    <>
      <BrowserRouter>
        {
          isAuth
            ? isUser
            : isAnonim
        }

      </BrowserRouter>
      <Version/>
    </>
  )

}

