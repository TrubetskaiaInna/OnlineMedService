import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DoctorList from './DoctorList'
import { user, doctor, selectedDoctor } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.selectedDoctors
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData, clearDoctorData } = doctor
  const { setSelectedDoctorData } = selectedDoctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData, clearDoctorData, setSelectedDoctorData }, dispatch)
}

const DoctorListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
