import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from './Home'
import { user, doctor } from '../../actions'

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
  return bindActionCreators({ setUserData, clearUserData, setDoctorData }, dispatch)
}

const UserRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default UserRegistrationComponentContainer
