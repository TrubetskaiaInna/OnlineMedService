import update from 'immutability-helper'

import { user } from '../constants'

const initialState = {
  mainUser: {
    userNameLog: '',
    passwordLog: '',
    login: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case user.SET_USER_DATA:
      return update(state, {
        mainUser: {
          userNameLog: { $set: action.payload.userNameLog },
          passwordLog: { $set: action.payload.passwordLog },
          login: { $set: true }
        }
      })
    case user.CLEAR_USER_DATA:
      return update(state, {
        mainUser: {
          userNameLog: { $set: '' },
          passwordLog: { $set: '' },
          login: { $set: false }
        }
      })
    default:
      return state
  }
}
