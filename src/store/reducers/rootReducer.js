import { combineReducers } from 'redux'
import {todoListReducer} from './todoList'
import {headerReducer} from './header'

export default combineReducers({
  todoList: todoListReducer,
  header: headerReducer
})
