import { doctor, user } from '../constants'

const setDoctorData = (payload) => {
  return {
    type: doctor.SET_DOCTOR_DATA,
    payload
  }
}

const clearDoctorData = () => {
  return { type: doctor.CLEAR_DOCTOR_DATA }
}

export default {
  setDoctorData,
  clearDoctorData
}
