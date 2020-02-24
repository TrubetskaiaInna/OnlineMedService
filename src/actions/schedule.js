import { schedule } from '../constants'

const setScheduleDoctor = (payload) => {
  return {
    type: schedule.SET_SCHEDULE_DOCTOR,
    payload
  }
}

export default {
  setScheduleDoctor
}
