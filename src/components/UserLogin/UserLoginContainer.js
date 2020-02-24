import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserLoginComponent from './UserLogin'
import { user, doctor, spinner, token } from '../../actions'

const mapStateToProps = (state) => {
  console.log(111, state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    action: state.spinner.action,
    token: state.token.token
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData } = doctor
  const { showLoading, hideLoading } = spinner
  const { setToken, clearToken } = token
  return bindActionCreators({
    setUserData,
    clearUserData,
    setDoctorData,
    showLoading,
    hideLoading,
    setToken,
    clearToken
  }, dispatch)
}

const UserLoginComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginComponent)

export default UserLoginComponentContainer
