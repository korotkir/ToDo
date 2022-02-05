import React from "react"
import { ThemeProvider } from "styled-components"
import {lightTheme, darkTheme, GlobalStyles} from "../themes/themes"
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoItems from "../TodoItems/TodoItems"
import TodosSuccess from "../TodosSuccess/TodosSuccess"
import About from "../About/About"
import TodoStatus from '../TodoStatus/TodoStatus'
import styles from './TodoList.module.css'


class TodoList extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   value: '',
   items: [{id: 0, value: 'Купить штаны', checked: false}],
   checked: false,
   series: false,
   done: 0,
   theme: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' || 'light',
   showModal: false,
   autoThemeSwitch: true,
   showModalSwitch: true,
   showAbout: false,
  }
 }

 themeToggler = () => {
   this.state.theme === 'light' ? this.setState({ theme: 'dark' }) : this.setState({ theme: 'light' })
 }

 themeSwitch = () => {
   this.state.autoThemeSwitch === true ? this.setState({ autoThemeSwitch: false }) : this.setState({ autoThemeSwitch: true })
 }

 modalSwitch = () => {
  this.state.showModalSwitch === true ? this.setState({ showModalSwitch: false }) : this.setState({ showModalSwitch: true })
 }

 performed = (condition, index) => {
  let checkboxState = (i, bool) => {
   let copyItems = this.state.items.slice()
   copyItems[i].checked = bool
   this.setState({ items: [...copyItems] })
   console.log('items2', this.state.items);
  }

  if(condition === 'plus') {
    this.setState({ done: this.state.done + 1 })
    checkboxState(index, true)

    // TODO: костыль!!
    if (this.state.done + 1 === this.state.items.length && (this.state.showModalSwitch === true || this.state.showModalSwitch === 'true' ) ) {
      this.setState( {showModal: true} )
   }
  }

  if(condition === 'minus') {
   this.setState({ done: this.state.done - 1 })
   checkboxState(index, false)
  }
 }

 itemChange = (event) => {
  this.setState({ value: event.target.value })
 }

 itemSubmit = (event) => {
  event.preventDefault()
  let value = this.state.value.trim('')
  value === ''
   ? this.setState({value: ''})
   : this.setState({
    items: [...this.state.items, {id: Math.random(), value: value, checked: this.state.checked}, ],
    value: '',
    isAnimation: true
   })
 }

 removeItem = (element) => {
  this.setState({
   items: this.state.items.filter(item => item.id !== element.id),
   series: true,
   isAnimation: false,
  })

  element.checked && this.setState({ done: this.state.done - 1 })
 }

 onClear = () => {
  this.setState( {items: []} )
  this.setState({ showModal: false, done: 0, series: true } )
 }

 about = () => {
   this.setState({ showAbout: true })
 }

 componentDidUpdate() {
  localStorage.setItem('done', JSON.stringify(this.state.done))
  localStorage.setItem('theme', JSON.stringify(this.state.theme))
  localStorage.setItem('autoThemeSwitch', JSON.stringify(this.state.autoThemeSwitch))
  localStorage.setItem('showModalSwitch', JSON.stringify(this.state.showModalSwitch))
 }

 componentDidMount() {
   let itemStorage = JSON.parse(localStorage.getItem('items'))
   let doneStorage = localStorage.getItem('done')
   let themeStorage = JSON.parse(localStorage.getItem('theme'))
   let autoThemeStorage = JSON.parse(localStorage.getItem('autoThemeSwitch'))
   let modalStorage = JSON.parse(localStorage.getItem('showModalSwitch'))

  if(localStorage.autoThemeSwitch) {
    this.setState({ autoThemeSwitch: autoThemeStorage})
  }

  if(localStorage.theme) {
    this.setState({ theme: themeStorage})
  }

  if (localStorage.showModalSwitch) {
    this.setState({ showModalSwitch: modalStorage})
  }

  if (localStorage.autoThemeSwitch === 'true') {
    const isDark = matchMedia('(prefers-color-scheme: dark)')
    this.setState( { theme: isDark.matches ? 'dark' : 'light' || 'light' } )
  }

  if(localStorage.items) {
    this.setState({ items: [...itemStorage] })
  }

  if(Number(doneStorage) >= 1) {
    this.setState({ done: Number(doneStorage) })
  } else {
      this.setState({ done: 0 })
  }

 }

 componentWillUnmount() {
  // fix Warning: Can't perform a React state update on an unmounted component
  this.setState = (state,callback)=>{
      return;
  };
}

 render() {
   return (
     <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
       <GlobalStyles/>
       <div className={styles.TodoList}>
         <div className="container-fluid">

           <TodoHeader
             submit={this.itemSubmit}
             change={this.itemChange}
             value={this.state.value}
             themeToggler={this.themeToggler}
             theme={this.state.theme}
             themeSwitch={this.themeSwitch}
             themeChecked={this.state.autoThemeSwitch}
             modalSwitch={this.modalSwitch}
             modalChecked={this.state.showModalSwitch}
             about={this.about}
           />

           <TodoItems add={this.itemSubmit}
                      remove={this.removeItem}
                      items={this.state.items}
                      performed={this.performed}
                      series={this.state.series}
                      isAnimation={this.state.isAnimation}
                      checked={this.state.checked}
                      done={this.state.done}
                      theme={this.state.theme}
           />

           <TodoStatus
             done={this.state.done}
             values={this.state.items.length}
           />

         </div>

         <TodosSuccess
           show={this.state.showModal}
           onHide={() => this.setState({showModal: false})}
           onClear={this.onClear}
         />
         <About
           show={this.state.showAbout}
           onHide={() => this.setState({showAbout: false})}
         />
       </div>
     </ThemeProvider>
   )
 }
}

export default TodoList
