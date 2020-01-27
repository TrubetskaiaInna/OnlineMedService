import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserRegistrationComponent from './UserRegistrationComponent'
import { user } from '../../actions'
import { doctor } from '../../actions'

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

const UserRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistrationComponent)

export default UserRegistrationComponentContainer
