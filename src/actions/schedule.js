import {  schedule } from '../constants'

const setScheduleDoctor = (payload) => {
  return {
    type: schedule.SET_SCHEDULE_DOCTOR,
    payload
  }
}

const clearScheduleDoctor = () => {
  return { type: schedule.CLEAR_SCHEDULE_DOCTOR }
}

export default {
  setScheduleDoctor,
  clearScheduleDoctor
}
