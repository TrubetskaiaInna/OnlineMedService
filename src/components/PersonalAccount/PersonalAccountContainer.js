import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PersonalAccount from './PersonalAccount'
import { user } from '../../actions'
import { doctor } from '../../actions'

const mapStateToProps = (state) => {
  console.log(111, state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData}, dispatch)
}

const UserRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalAccount)

export default UserRegistrationComponentContainer
