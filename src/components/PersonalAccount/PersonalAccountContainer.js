import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PersonalAccount from './PersonalAccount'
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
  const { setDoctorData, clearDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData, clearDoctorData }, dispatch)
}

const PersonalAccountComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalAccount)

export default PersonalAccountComponentContainer
