import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DoctorList from './DoctorList'
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
  const { setDoctorData, clearDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData, clearDoctorData }, dispatch)
}

const DoctorListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
