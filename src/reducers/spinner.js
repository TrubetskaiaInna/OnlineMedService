import { spinner } from '../constants'

const initialState = {
  action: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case spinner.SHOW_LOADING:
      return {
        action: true
      }
    case spinner.HIDE_LOADING:
      return {
        action: false
      }
    default:
      return state
  }
}
