import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserRegistrationComponent from './UserRegistration'
import { user, doctor } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData }, dispatch)
}

const UserRegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistrationComponent)

export default UserRegistrationContainer
