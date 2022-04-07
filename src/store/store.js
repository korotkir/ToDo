import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

const saveToLocalStorage = (state) => {
  const todolist = state.todoList
  localStorage.setItem('storage', JSON.stringify(todolist))
  // localStorage.setItem('done', JSON.stringify(todolist.done))
  // localStorage.setItem('theme', JSON.stringify(props.theme))
  // localStorage.setItem('autoThemeSwitch', JSON.stringify(props.autoThemeSwitch))
  // localStorage.setItem('showModalSwitch', JSON.stringify(props.showModalSwitch))
}

const loadFromLocalStorage = () => {
  const stateStorage = localStorage.getItem('storage')
  return stateStorage ? JSON.parse(stateStorage) : undefined
}

const storage = loadFromLocalStorage()

export const store = createStore(rootReducer, storage)

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

