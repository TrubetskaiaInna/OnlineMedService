import update from 'immutability-helper'

import { user } from '../constants'

const initialState = {
  mainUser: {
    nicknameLog: '',
    passwordLog: '',
    login: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case user.SET_USER_DATA:
      return update(state, {
        mainUser: {
          nicknameLog: { $set: action.payload.nicknameLog },
          passwordLog: { $set: action.payload.passwordLog },
          login: { $set: true }
        }
      })
    case user.CLEAR_USER_DATA:
      return update(state, {
        mainUser: {
          nicknameLog: { $set: '' },
          passwordLog: { $set: '' },
          login: { $set: false }
        }
      })
    default:
      return state
  }
}
