import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import axios from 'axios'
import {getDatabase, ref, set} from 'firebase/database'


// LOCALSTORAGE

// const loadFromLocalStorage = () => {
//   try {
//     const stateStorage = localStorage.getItem('storage')
//     if (!stateStorage) return undefined
//     else return JSON.parse(stateStorage)
//   } catch(err) {
//       console.log(err)
//       return undefined
//   }
// }

// const saveToLocalStorage = (state) => {
//   try {
//     const todolist = state
//     localStorage.setItem('storage', JSON.stringify(todolist))
//   } catch(err) {
//     console.log(err)
//   }
// }

// const persistedStore = loadFromLocalStorage()

// store.subscribe(() => {
//   saveToLocalStorage(store.getState())
// })

// store.subscribe(() => {
//   itemCreated(store.getState())
// })

// FIREBASE

export function sendItems() {
  const db = getDatabase()
  const id = localStorage.getItem('id')
  set(ref(db, 'items/' + id), store.getState().todo.items)
}

// export function getItems() {
//
// }

export const store = createStore (
  rootReducer,
  // persistedStore
)




