import { combineReducers } from 'redux'
import user from './user'
import doctor from './doctor'
import selectedDoctor from './selectedDoctor'
export default combineReducers({
  user,
  doctor,
  selectedDoctor
})
