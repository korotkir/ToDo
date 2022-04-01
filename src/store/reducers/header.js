import {SET_STATUS, SETTINGS_BAR_VISIBLE} from '../actions/actionType'

const initialState = {
  status: false
}

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      console.log('SET_STATUS > ', state.status)
      return {
        ...state,
        status: !state.status
      }
    case SETTINGS_BAR_VISIBLE:
      console.log('SETTINGS_BAR_VISIBLE > ', state.status)
      return {
        ...state,
        status: action.value
      }
    default:
      return state
  }
}
