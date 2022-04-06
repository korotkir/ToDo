import {
  TOGGLE_THEME,
  THEME_SWITCH,
  MODAL_SWITCH,
  CHANGE_DONE,
  SET_ITEMS,
  MODAL,
  SET_VALUE,
  NEW_TASK,
  REMOVE_TASK,
  ON_CLEAR,
  ABOUT,
  AUTO_THEME_LOCAL_STORAGE,
  THEME_LOCAL_STORAGE,
  MODAL_SWITCH_LOCAL_STORAGE,
  ITEMS_LOCAL_STORAGE,
  DONE_LOCAL_STORAGE, AUTO_DARK_THEME,

} from './actionType'

export function themeToggler() {
  return {
    type: TOGGLE_THEME
  }
}

export function themeSwitch() {
  return {
    type: THEME_SWITCH
  }
}

export function modalSwitch() {
  return {
    type: MODAL_SWITCH
  }
}

export function modal(bool) {
  return {
    type: MODAL,
    value: bool
  }
}

export function about(bool) {
  return {
    type: ABOUT,
    value: bool
  }
}

export function changeDone(value) {
  return {
    type: CHANGE_DONE,
    done: value
  }
}

export function setItems(item) {
  return {
    type: SET_ITEMS,
    item: item
  }
}

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value
  }
}

export function newTask(value) {
  return {
    type: NEW_TASK,
    value: value
  }
}

export function removeTask(task) {
  return {
    type: REMOVE_TASK,
    task: task
  }
}

export function onClear() {
  return {
    type: ON_CLEAR
  }
}

// export function storageHandler() {
//   return dispatch => {
//     let itemStorage = JSON.parse(localStorage.getItem('items'))
//     let doneStorage = JSON.parse(localStorage.getItem('done'))
//     let themeStorage = JSON.parse(localStorage.getItem('theme'))
//     let autoThemeStorage = JSON.parse(localStorage.getItem('autoThemeSwitch'))
//     let modalStorage = JSON.parse(localStorage.getItem('showModalSwitch'))
//
//     if(localStorage.autoThemeSwitch) {
//       const isDark = matchMedia('(prefers-color-scheme: dark)')
//       dispatch(autoThemeLocalStorage(autoThemeStorage, isDark))
//     }
//
//     if(localStorage.theme) {
//       dispatch(themeLocalStorage(themeStorage))
//     }
//
//     if (localStorage.showModalSwitch) {
//       dispatch(modalSwitchLocalStorage(modalStorage))
//     }
//
//     if(localStorage.items) {
//       dispatch(itemsLocalStorage([...itemStorage]))
//     }
//
//     if(Number(doneStorage)) {
//       dispatch(doneLocalStorage(Number(doneStorage)))
//     }
//   }
//
// }

export function autoThemeLocalStorage(value) {
  return {
    type: AUTO_THEME_LOCAL_STORAGE,
    value: value,
  }
}

export function themeLocalStorage(value) {
  return {
    type: THEME_LOCAL_STORAGE,
    value: value
  }
}

export function modalSwitchLocalStorage(value) {
  return {
    type: MODAL_SWITCH_LOCAL_STORAGE,
    value: value
  }
}

export function itemsLocalStorage(value) {
  return {
    type: ITEMS_LOCAL_STORAGE,
    value: value
  }
}

export function doneLocalStorage(value) {
  return {
    type: DONE_LOCAL_STORAGE,
    value: value
  }
}

export function autoDarkTheme(isDark) {
  return {
    type: AUTO_DARK_THEME,
    isDark: isDark
  }
}




