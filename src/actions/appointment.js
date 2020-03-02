import { appointment } from '../constants'

const setAppointmentData = (payload) => {
  return {
    type: appointment.SET_APPOINTMENT_DATA,
    payload
  }
}

const clearAppointmentData = () => {
  return { type: appointment.CLEAR_APPOINTMENT_DATA }
}

export default {
  setAppointmentData,
  clearAppointmentData
}
