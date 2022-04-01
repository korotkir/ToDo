import {SET_STATUS} from '../actions/actionType'

const initialState = {
  status: false
}

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      console.log('set_state => ', state.status)
      return {
        ...state,
        status: !state.status
      }
    default:
      return state
  }
}
