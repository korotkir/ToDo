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
  AUTO_THEME,
  SET_STATUS,
  SETTINGS_BAR_VISIBLE,

} from './actionType'

export function adaptiveSettingsStatus() {
  return {
    type: SET_STATUS
  }
}

export function setSettingsBarVisible(bool) {
  return {
    type: SETTINGS_BAR_VISIBLE,
    value: bool
  }
}

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
    item
  }
}

export function setValue(value) {
  return {
    type: SET_VALUE,
    value
  }
}

export function newTask(value) {
  return {
    type: NEW_TASK,
    value
  }
}

export function removeTask(task) {
  return {
    type: REMOVE_TASK,
    task
  }
}

export function onClear() {
  return {
    type: ON_CLEAR
  }
}

export function autoTheme(isDark) {
  return {
    type: AUTO_THEME,
    isDark
  }
}



