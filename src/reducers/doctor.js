import { doctor, user } from '../constants'
import update from 'immutability-helper'

const initialState = {
  doctors: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case doctor.SET_DOCTOR_DATA:
      return {
        doctors: action.payload
      }
    case doctor.CLEAR_DOCTOR_DATA:
      return {
        doctors: []
      }
    default:
      return state
  }
}
