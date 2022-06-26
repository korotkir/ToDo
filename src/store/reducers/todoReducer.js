import {
  CHANGE_DONE,
  SET_VALUE,
  MODAL,
  MODAL_SWITCH,
  SET_ITEMS,
  THEME_SWITCH,
  TOGGLE_THEME,
  NEW_TASK,
  REMOVE_TASK,
  ON_CLEAR,
  ABOUT,
  AUTO_THEME,
  SET_STATUS,
  SETTINGS_BAR_VISIBLE, ADD_DATA
} from '../actions/actionType'

const initialState = {
  status: false,
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

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: !state.status
      }
    case SETTINGS_BAR_VISIBLE:
      return {
        ...state,
        status: action.value
      }
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
        autoThemeSwitch: false
      }
    case THEME_SWITCH:
      return {
        ...state,
        autoThemeSwitch: !state.autoThemeSwitch
      }
    case AUTO_THEME:
      return {
        ...state,
        theme: state.autoThemeSwitch && action.isDark
          ? 'dark'
          : 'light'
          || 'light'
      }
    case MODAL_SWITCH:
      return {
        ...state,
        showModalSwitch: !state.showModalSwitch
      }
    case CHANGE_DONE:
      return {
        ...state,
        done: action.done === 'sum'
          ? state.done + 1
          : state.done - 1
      }
    case SET_ITEMS:
      return {
        ...state,
        items: action.item
      }
    case MODAL:
      return {
        ...state,
        showModal: action.value
      }
    case SET_VALUE:
      return {
        ...state,
        value: action.value
      }
    case NEW_TASK:
      return {
        ...state,
        items: [...state.items, {id: Math.random(), value: action.value, checked: state.checked} ],
        value: '',
        isAnimation: true
      }
    case REMOVE_TASK:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.task.id),
        series: true,
        isAnimation: false,
      }
    case ON_CLEAR:
      return {
        ...state,
        items: [],
        showModal: false,
        done: 0,
        series: true
      }
    case ABOUT:
      return {
        ...state,
        showAbout: action.value
      }
    case ADD_DATA:
      return {
        ...state,
        items: action.value
      }
    default: return state
  }
}
