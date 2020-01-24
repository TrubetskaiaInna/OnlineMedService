import update from 'immutability-helper'

import { user } from '../constants'

const initialState = {
  mainUser: {
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    tel: '',
    password: '',
    confirmPassword: '',
    address: '',
    sex: {
      man: false,
      woman: false
    },
    additionalInfo: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case user.SET_USER_DATA:
      return update(state, {
        mainUser: {
          firstName: { $set: action.payload.firstName },
          lastName: { $set: action.payload.lastName },
          nickname: { $set: action.payload.nickname },
          email: { $set: action.payload.email },
          tel: { $set: action.payload.tel },
          password: { $set: action.payload.password },
          confirmPassword: { $set: action.payload.confirmPassword },
          address: { $set: action.payload.address },
          sex: { $set: action.payload.sex },
          additionalInfo: { $set: action.payload.additionalInfo }
        }
      })
    case user.CLEAR_USER_DATA:
      return update(state, {
        mainUser: {
          firstName: { $set: '' },
          lastName: { $set: '' },
          nickname: { $set: '' },
          email: { $set: '' },
          tel: { $set: '' },
          password: { $set: '' },
          confirmPassword: { $set: '' },
          address: { $set: '' },
          sex: { $set: '' },
          additionalInfo: { $set: '' }
        }
      })
    default:
      return state
  }
}
