import { user } from '../constants'

const setUserData = (payload) => {
  return {
    type: user.SET_USER_DATA,
    payload
  }
}

export default {
  setUserData
}
