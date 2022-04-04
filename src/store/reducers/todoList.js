import {
  CHANGE_DONE,
  SET_VALUE,
  MODAL,
  MODAL_SWITCH,
  SET_ITEMS,
  THEME_SWITCH,
  TOGGLE_THEME, NEW_TASK, REMOVE_TASK, ON_CLEAR, ABOUT
} from '../actions/actionType'

const initialState = {
  value: '',
  items: [
    // {id: 0, value: 'Купить штаны', checked: false}
  ],
  checked: false,
  series: false,
  done: 0,
  theme: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' || 'light',
  showModal: false,
  autoThemeSwitch: true,
  showModalSwitch: true,
  showAbout: false,
}

export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      console.log('TOGGLE_THEME')
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    case THEME_SWITCH:
      console.log('THEME_SWITCH')
      return {
        ...state,
        autoThemeSwitch: !state.autoThemeSwitch
      }
    case MODAL_SWITCH:
      console.log('MODAL_SWITCH')
      return {
        ...state,
        showModalSwitch: !state.showModalSwitch
      }
    case CHANGE_DONE:
      console.log('CHANGE_DONE')
      return {
        ...state,
        done: action.done === 'sum'
                ? state.done + 1
                : state.done - 1
      }
    case SET_ITEMS:
      console.log('SET_ITEMS')
      return {
        ...state,
        items: action.item
      }
    case MODAL:
      console.log('MODAL')
      return {
        ...state,
        showModal: action.value
      }
    case SET_VALUE:
      console.log('SET_VALUE')
      return {
        ...state,
        value: action.value
      }
    case NEW_TASK:
      console.log('NEW_TASK')
      return {
        ...state,
         items: [...state.items, {id: Math.random(), value: action.value, checked: state.checked} ],
         value: '',
         isAnimation: true
      }
    case REMOVE_TASK:
      console.log('REMOVE_TASK')
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.task.id),
        series: true,
        isAnimation: false,
      }
    case ON_CLEAR:
      console.log('ON_CLEAR')
      return {
        ...state,
        items: [],
        showModal: false,
        done: 0,
        series: true
      }
    case ABOUT:
      console.log('ABOUT')
      return {
        ...state,
        showAbout: action.value
      }
    default: return state
  }
}
