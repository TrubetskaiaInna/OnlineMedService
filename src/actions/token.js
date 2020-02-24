import { token } from '../constants'

const setToken = (payload) => {
  return {
    type: token.SET_TOKEN,
    payload
  }
}

const clearToken = () => {
  return {
    type: token.CLEAR_TOKEN
  }
}

export default {
  setToken,
  clearToken
}
