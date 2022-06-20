import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


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

export const store = createStore (
  rootReducer,
  applyMiddleware(thunk)
  // persistedStore
)




