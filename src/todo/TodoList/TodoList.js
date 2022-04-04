import React from "react"
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
  modalSwitch,
  setItems,
  themeSwitch,
  themeToggler,
  removeTask,
  onClear,
  about,
  newTask
} from '../../store/actions/todoList'

class TodoList extends React.Component {
  performed = (condition, index) => {

    let checkboxState = (i, bool) => {
      let copyItems = this.props.items.slice()
      copyItems[i].checked = bool
      this.props.setItems([...copyItems])
    }

    if (condition === 'plus') {
      this.props.changeDone('sum')
      checkboxState(index, true)

      // TODO: костыль!!
      if (this.props.done + 1 === this.props.items.length && (this.props.showModalSwitch === true || this.props.showModalSwitch === 'true')) {
        this.props.modal(true)
      }
    }

    if (condition === 'minus') {
      this.props.changeDone('sub')
      checkboxState(index, false)
    }
  }

  itemChange = (event) => {
    this.props.setValue(event.target.value)
  }

  itemSubmit = (event) => {
  event.preventDefault()
  let value = this.props.value.trim('')
  value === ''
   ? this.props.setValue('')
    : this.props.newTask(value)
   }

  removeItem = (element) => {
   this.props.removeTask(element)
   element.checked && this.props.changeDone('sub')
 }

  componentDidUpdate() {
    console.log('items > ', this.props.items)
    // localStorage.setItem('done', JSON.stringify(this.props.done))
    // localStorage.setItem('theme', JSON.stringify(this.props.theme))
    // localStorage.setItem('autoThemeSwitch', JSON.stringify(this.props.autoThemeSwitch))
    // localStorage.setItem('showModalSwitch', JSON.stringify(this.props.showModalSwitch))
  }
 //
 // componentDidMount() {
 //   let itemStorage = JSON.parse(localStorage.getItem('items'))
 //   let doneStorage = JSON.parse(localStorage.getItem('done'))
 //   let themeStorage = JSON.parse(localStorage.getItem('theme'))
 //   let autoThemeStorage = JSON.parse(localStorage.getItem('autoThemeSwitch'))
 //   let modalStorage = JSON.parse(localStorage.getItem('showModalSwitch'))
 //
 //  if(localStorage.autoThemeSwitch) {
 //    this.setState({ autoThemeSwitch: autoThemeStorage})
 //  }
 //
 //  if(localStorage.theme) {
 //    this.setState({ theme: themeStorage})
 //  }
 //
 //  if (localStorage.showModalSwitch) {
 //    this.setState({ showModalSwitch: modalStorage})
 //  }
 //
 //  if (localStorage.autoThemeSwitch === 'true') {
 //    const isDark = matchMedia('(prefers-color-scheme: dark)')
 //    this.setState( { theme: isDark.matches ? 'dark' : 'light' || 'light' } )
 //  }
 //
 //  if(localStorage.items) {
 //    this.setState({ items: [...itemStorage] })
 //  }
 //
 //  if(Number(doneStorage) >= 1) {
 //    this.setState({ done: Number(doneStorage) })
 //  } else {
 //      this.setState({ done: 0 })
 //  }
 //
 // }

 render() {
   return (
     <ThemeProvider theme={this.props.theme === 'light' ? lightTheme : darkTheme}>
       <GlobalStyles/>
       <div className={styles.TodoList}>
         <div className="container">

           <TodoHeader
             submit={this.itemSubmit}
             change={this.itemChange}
             value={this.props.value}
             themeToggler={this.props.themeToggler}
             theme={this.props.theme}
             themeSwitch={this.props.themeSwitch}
             themeChecked={this.props.autoThemeSwitch}
             modalSwitch={this.props.modalSwitch}
             modalChecked={this.props.showModalSwitch}
             about={this.props.about}
           />

           <TodoItems add={this.itemSubmit}
                      remove={this.removeItem}
                      items={this.props.items}
                      performed={this.performed}
                      series={this.props.series}
                      isAnimation={this.props.isAnimation}
                      checked={this.props.checked}
                      done={this.props.done}
                      theme={this.props.theme}
           />

           <TodoStatus
             done={this.props.done}
             values={this.props.items.length}
           />

         </div>

         <TodosSuccess
           show={this.props.showModal}
           onHide={() => this.props.modal(false)}
           onClear={this.props.onClear}
         />
         <About
           show={this.props.showAbout}
           onHide={() => this.props.about(false)}
         />
       </div>
     </ThemeProvider>
   )
 }
}

function mapStateToProps(state) {
  return {
    autoThemeSwitch: state.todoList.autoThemeSwitch,
    showModalSwitch: state.todoList.showModalSwitch,
    done: state.todoList.done,
    items: state.todoList.items,
    value: state.todoList.value,
    checked: state.todoList.checked,
    series: state.todoList.series,
    theme: state.todoList.theme,
    showModal: state.todoList.showModal,
    showAbout: state.todoList.showAbout,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    themeToggler: () => dispatch(themeToggler()),
    themeSwitch: () => dispatch(themeSwitch()),
    modalSwitch: () => dispatch(modalSwitch()),
    changeDone: value => dispatch(changeDone(value)),
    setItems: item => dispatch(setItems(item)),
    modal: bool => dispatch(modal(bool)),
    about: bool => dispatch(about(bool)),
    // Возможно нужно передать event?
    setValue: value => dispatch(setValue(value)),
    newTask: value => dispatch(newTask(value)),
    removeTask: task => dispatch(removeTask(task)),
    onClear: () => dispatch(onClear()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
