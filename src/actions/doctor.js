import { doctor } from '../constants'

const setDoctorData = (payload) => {
  return {
    type: doctor.SET_DOCTOR_DATA,
    payload
  }
}

export default {
  setDoctorData
}
