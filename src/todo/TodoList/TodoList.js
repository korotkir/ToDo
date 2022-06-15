import React, {useEffect} from 'react'
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "../themes/themes"
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoItems from "../TodoItems/TodoItems"
import TodosSuccess from "../TodosSuccess/TodosSuccess"
import About from "../About/About"
import TodoStatus from '../TodoStatus/TodoStatus'
import styles from './TodoList.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {
  changeDone,
  setValue,
  modal,
  setItems,
  removeTask,
  newTask,
  autoTheme, itemCreated,
} from '../../store/actions/todoList'
import {sendItems} from '../../store/store'

export default function TodoList() {
  const dispatch = useDispatch()
  const showModalSwitch = useSelector(state => state.todo.showModalSwitch)
  const done = useSelector(state => state.todo.done)
  const items = useSelector(state => state.todo.items)
  const text = useSelector(state => state.todo.value)
  const theme = useSelector(state => state.todo.theme)
  const autoThemeSwitch = useSelector(state => state.todo.autoThemeSwitch)

  const performed = (condition, index) => {
    let checkboxState = (i, bool) => {
      let copyItems = items.slice()
      copyItems[i].checked = bool
      dispatch(setItems([...copyItems]))
    }

    if (condition === 'plus') {
      dispatch(changeDone('sum'))
      checkboxState(index, true)

      if (done + 1 === items.length && (showModalSwitch === true)) {
        dispatch(modal(true))
      }
    }

    if (condition === 'minus') {
      dispatch(changeDone('sub'))
      checkboxState(index, false)
    }
  }

  const itemChange = (event) => {
    dispatch(setValue(event.target.value))
  }

  const itemSubmit = (event) => {
    event.preventDefault()
    let value = text.trim('')
    value === ''
      ? dispatch(setValue(''))
      : dispatch(newTask(value))

    sendItems()
  }

  const removeItem = (element) => {
    dispatch(removeTask(element))
    element.checked && dispatch(changeDone('sub'))
  }

 useEffect(() => {
   const isDark = matchMedia('(prefers-color-scheme: dark)')
   if (autoThemeSwitch) dispatch(autoTheme(isDark.matches))
   else {return null}
 }, [autoThemeSwitch, dispatch])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={styles.TodoList}>

        <div className="container">
          <TodoHeader submit={itemSubmit} change={itemChange} />
          <TodoItems add={itemSubmit} remove={removeItem} performed={performed}/>
          <TodoStatus />
        </div>

        <TodosSuccess />
        <About/>
      </div>
    </ThemeProvider>
  )
}
