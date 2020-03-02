import { appointment } from '../constants'

const initialState = {
  appointment: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case appointment.SET_APPOINTMENT_DATA:
      return {
        appointment: action.payload
      }
    case appointment.CLEAR_APPOINTMENT_DATA:
      return {
        appointment: []
      }
    default:
      return state
  }
}
