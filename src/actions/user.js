import { user } from '../constants'

const setUserData = (payload) => {
  return {
    type: user.SET_USER_DATA,
    payload
  }
}

const clearUserData = () => {
  return { type: user.CLEAR_USER_DATA }
}

export default {
  setUserData,
  clearUserData
}
