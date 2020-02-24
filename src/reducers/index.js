import { combineReducers } from 'redux'
import user from './user'
import doctor from './doctor'
import selectedDoctor from './selectedDoctor'
import spinner from './spinner'
import schedule from './schedule'
export default combineReducers({
  user,
  doctor,
  selectedDoctor,
  spinner,
  schedule
})
