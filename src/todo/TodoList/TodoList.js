import React from 'react'
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
} from '../../store/actions/todoList'

export default function TodoList() {
  const dispatch = useDispatch()
  const showModalSwitch = useSelector(state => state.showModalSwitch)
  const done = useSelector(state => state.done)
  const items = useSelector(state => state.items)
  const text = useSelector(state => state.value)
  const theme = useSelector(state => state.theme)

  const performed = (condition, index) => {
    let checkboxState = (i, bool) => {
      let copyItems = items.slice()
      copyItems[i].checked = bool
      dispatch(setItems([...copyItems]))
    }

    if (condition === 'plus') {
      dispatch(changeDone('sum'))
      checkboxState(index, true)

      // TODO: костыль!!
      if (done + 1 === items.length && (showModalSwitch === true || showModalSwitch === 'true')) {
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
   }

  const removeItem = (element) => {
   dispatch(removeTask(element))
   element.checked && dispatch(changeDone('sub'))
 }

  // componentDidUpdate() {
  //   localStorage.setItem('done', JSON.stringify(this.state.done))
  //   localStorage.setItem('theme', JSON.stringify(this.state.theme))
  //   localStorage.setItem('autoThemeSwitch', JSON.stringify(this.state.autoThemeSwitch))
  //   localStorage.setItem('showModalSwitch', JSON.stringify(this.state.showModalSwitch))
  // }
  //
  // componentDidMount() {
  //   let itemStorage = JSON.parse(localStorage.getItem('items'))
  //   let doneStorage = JSON.parse(localStorage.getItem('done'))
  //   let themeStorage = JSON.parse(localStorage.getItem('theme'))
  //   let autoThemeStorage = JSON.parse(localStorage.getItem('autoThemeSwitch'))
  //   let modalStorage = JSON.parse(localStorage.getItem('showModalSwitch'))
  //
  //   if(localStorage.autoThemeSwitch) {
  //     this.setState({ autoThemeSwitch: autoThemeStorage})
  //   }
  //
  //   if(localStorage.theme) {
  //     this.setState({ theme: themeStorage})
  //   }
  //
  //   if (localStorage.showModalSwitch) {
  //     this.setState({ showModalSwitch: modalStorage})
  //   }
  //
  //   if (localStorage.autoThemeSwitch === 'true') {
  //     const isDark = matchMedia('(prefers-color-scheme: dark)')
  //     this.setState( { theme: isDark.matches ? 'dark' : 'light' || 'light' } )
  //   }
  //
  //   if(localStorage.items) {
  //     this.setState({ items: [...itemStorage] })
  //   }
  //
  //   if(Number(doneStorage) >= 1) {
  //     this.setState({ done: Number(doneStorage) })
  //   } else {
  //     this.setState({ done: 0 })
  //   }
  //
  // }

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
