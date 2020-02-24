import { token } from '../constants'

const initialState = {
  token: ''

}

export default (state = initialState, action) => {
  switch (action.type) {
    case token.SET_TOKEN:
      return {
        token: action.payload
      }
    case token.CLEAR_TOKEN:
      return {
        token: ''
      }
    default:
      return state
  }
}
