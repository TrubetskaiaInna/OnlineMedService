import { combineReducers } from 'redux'
import user from './user'
import doctor from './doctor'
export default combineReducers({
  user,
  doctor
})
