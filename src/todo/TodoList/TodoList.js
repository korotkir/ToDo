import React from 'react'
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "../themes/themes"
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoItems from "../TodoItems/TodoItems"
import TodosSuccess from "../TodosSuccess/TodosSuccess"
import About from "../About/About"
import TodoStatus from '../TodoStatus/TodoStatus'
import styles from './TodoList.module.css'
import {connect} from 'react-redux'
import {
  changeDone,
  setValue,
  modal,
  setItems,
  removeTask,
  newTask,
} from '../../store/actions/todoList'

function TodoList(props) {

  const performed = (condition, index) => {
    let checkboxState = (i, bool) => {
      let copyItems = props.items.slice()
      copyItems[i].checked = bool
      props.setItems([...copyItems])
    }

    if (condition === 'plus') {
      props.changeDone('sum')
      checkboxState(index, true)

      // TODO: костыль!!
      if (props.done + 1 === props.items.length && (props.showModalSwitch === true || props.showModalSwitch === 'true')) {
        props.modal(true)
      }
    }

    if (condition === 'minus') {
      props.changeDone('sub')
      checkboxState(index, false)
    }
  }

  const itemChange = (event) => {
    props.setValue(event.target.value)
  }

  const itemSubmit = (event) => {
  event.preventDefault()
  let value = props.value.trim('')
  value === ''
    ? props.setValue('')
    : props.newTask(value)
   }

  const removeItem = (element) => {
   props.removeTask(element)
   element.checked && props.changeDone('sub')
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
    <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
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

function mapStateToProps(state) {
  return {
    showModalSwitch: state.todoList.showModalSwitch,
    done: state.todoList.done,
    items: state.todoList.items,
    value: state.todoList.value,
    checked: state.todoList.checked,
    theme: state.todoList.theme
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeDone: value => dispatch(changeDone(value)),
    setItems: item => dispatch(setItems(item)),
    modal: bool => dispatch(modal(bool)),
    setValue: value => dispatch(setValue(value)),
    newTask: value => dispatch(newTask(value)),
    removeTask: task => dispatch(removeTask(task)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
