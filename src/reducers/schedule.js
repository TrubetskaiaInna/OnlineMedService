import { schedule } from '../constants'

const initialState = {
  schedule: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case schedule.SET_SCHEDULE_DOCTOR:
      return {
        schedule: action.payload
      }
    case schedule.CLEAR_SCHEDULE_DOCTOR:
      return {
        schedule: []
      }
    default:
      return state
  }
}
