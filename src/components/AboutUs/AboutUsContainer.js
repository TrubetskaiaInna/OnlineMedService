import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AboutUs from './AboutUs'
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
  const { setDoctorData ,clearDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData, clearDoctorData}, dispatch)
}

const UserRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs)

export default UserRegistrationComponentContainer
