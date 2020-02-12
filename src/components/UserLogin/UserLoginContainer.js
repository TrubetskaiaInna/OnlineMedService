import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserLoginComponent from './UserLogin'
import { user, doctor, spinner } from '../../actions'

const mapStateToProps = (state) => {
  console.log(111, state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    action: state.spinner.action
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData } = doctor
  const { showLoading, hideLoading } = spinner
  return bindActionCreators({
    setUserData, clearUserData, setDoctorData, showLoading, hideLoading
  }, dispatch)
}

const UserLoginComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginComponent)

export default UserLoginComponentContainer
