import React, {useEffect} from 'react'
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
  newTask,
  autoThemeLocalStorage,
  modalSwitchLocalStorage,
  itemsLocalStorage,
  doneLocalStorage,
  themeLocalStorage, autoDarkTheme,
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

 // useEffect(() => {
 //   localStorage.setItem('done', JSON.stringify(props.done))
 //   localStorage.setItem('theme', JSON.stringify(props.theme))
 //   localStorage.setItem('autoThemeSwitch', JSON.stringify(props.autoThemeSwitch))
 //   localStorage.setItem('showModalSwitch', JSON.stringify(props.showModalSwitch))
 // })
 //
 //  useEffect(() => {
 //    let itemStorage = JSON.parse(localStorage.getItem('items'))
 //    let doneStorage = JSON.parse(localStorage.getItem('done'))
 //    let themeStorage = JSON.parse(localStorage.getItem('theme'))
 //    let autoThemeStorage = JSON.parse(localStorage.getItem('autoThemeSwitch'))
 //    let modalStorage = JSON.parse(localStorage.getItem('showModalSwitch'))
 //
 //    if(localStorage.autoThemeSwitch) {
 //      props.autoThemeLocalStorage(autoThemeStorage)
 //    }
 //
 //    if(localStorage.theme) {
 //      props.themeLocalStorage(themeStorage)
 //    }
 //
 //    if (localStorage.showModalSwitch) {
 //      props.modalSwitchLocalStorage(modalStorage)
 //    }
 //
 //    if (localStorage.autoThemeSwitch === 'true') {
 //      const isDark = matchMedia('(prefers-color-scheme: dark)')
 //      props.autoDarkTheme(isDark.matches)
 //    }
 //
 //    if(localStorage.items) {
 //      props.itemsLocalStorage([...itemStorage])
 //    }
 //
 //    if(Number(doneStorage)) {
 //      props.doneLocalStorage(Number(doneStorage))
 //    }
 //  }, [localStorage])

  return (
    <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div className={styles.TodoList}>
        <div className="container">

          <TodoHeader
            submit={itemSubmit}
            change={itemChange}
            value={props.value}
            themeToggler={props.themeToggler}
            theme={props.theme}
            themeSwitch={props.themeSwitch}
            themeChecked={props.autoThemeSwitch}
            modalSwitch={props.modalSwitch}
            modalChecked={props.showModalSwitch}
            about={props.about}
          />

          <TodoItems add={itemSubmit}
                     remove={removeItem}
                     items={props.items}
                     performed={performed}
                     series={props.series}
                     isAnimation={props.isAnimation}
                     checked={props.checked}
                     done={props.done}
                     theme={props.theme}
          />

          <TodoStatus
            done={props.done}
            values={props.items.length}
          />

        </div>

        <TodosSuccess
          show={props.showModal}
          onHide={() => props.modal(false)}
          onClear={props.onClear}
        />
        <About
          show={props.showAbout}
          onHide={() => props.about(false)}
        />
      </div>
    </ThemeProvider>
  )
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
    setValue: value => dispatch(setValue(value)),
    newTask: value => dispatch(newTask(value)),
    removeTask: task => dispatch(removeTask(task)),
    onClear: () => dispatch(onClear()),
    // Storage
    autoThemeLocalStorage: (autoThemeStorage, isDark) => dispatch(autoThemeLocalStorage(autoThemeStorage, isDark)),
    modalSwitchLocalStorage: modalStorage => dispatch(modalSwitchLocalStorage(modalStorage)),
    itemsLocalStorage: ([...itemStorage]) => dispatch(itemsLocalStorage([...itemStorage])),
    doneLocalStorage: doneStorage => dispatch(doneLocalStorage(Number(doneStorage))),
    themeLocalStorage: themeStorage => dispatch(themeLocalStorage(themeStorage)),
    autoDarkTheme: isDark => dispatch(autoDarkTheme(isDark))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
