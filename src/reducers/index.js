import { combineReducers } from 'redux'
import user from './user'
import doctor from './doctor'
import selectedDoctor from './selectedDoctor'
import spinner from './spinner'
import schedule from './schedule'
import token from './token'
import selectedData from './selectedData'
import appointment from './appointment'
export default combineReducers({
  user,
  doctor,
  selectedDoctor,
  spinner,
  schedule,
  token,
  selectedData,
  appointment
})
