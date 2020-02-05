import { selectedDoctor } from '../constants'

const setSelectedDoctorData = (payload) => {
  return {
    type: selectedDoctor.SET_SELECTED_DOCTOR_DATA,
    payload
  }
}

export default {
  setSelectedDoctorData
}
