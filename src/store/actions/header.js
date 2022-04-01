import { SET_STATUS, SETTINGS_BAR_VISIBLE } from './actionType'

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
