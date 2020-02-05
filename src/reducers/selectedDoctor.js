import { selectedDoctor } from '../constants'

const initialState = {
  selectedDoctors: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case selectedDoctor.SET_SELECTED_DOCTOR_DATA:
      return {
        doctors: action.payload
      }
    default:
      return state
  }
}
