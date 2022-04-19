import {configureStore, createStore} from '@reduxjs/toolkit'
import {reducer} from './reducers/reducer'

const loadFromLocalStorage = () => {
  try {
    const stateStorage = localStorage.getItem('storage')
    if (!stateStorage) return undefined
    else return JSON.parse(stateStorage)
  } catch(err) {
      console.log(err)
      return undefined
  }
}

const saveToLocalStorage = (state) => {
  try {
    const todolist = state
    localStorage.setItem('storage', JSON.stringify(todolist))
  } catch(err) {
    console.log(err)
  }
}

const persistedStore = loadFromLocalStorage()

// Original redux store (working variable)
export const store = createStore (
  reducer,
  persistedStore
)

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})


store.subscribe(() => {
  console.log('real store >', store.getState())
})


