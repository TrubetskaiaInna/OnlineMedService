import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DoctorList from './DoctorList'
import { user, doctor, selectedDoctor, spinner } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.selectedDoctors,
    action: state.spinner.action
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData, clearDoctorData } = doctor
  const { setSelectedDoctorData } = selectedDoctor
  const { showLoading, hideLoading } = spinner
  return bindActionCreators({ setUserData,
    clearUserData,
    setDoctorData,
    clearDoctorData,
    setSelectedDoctorData,
    showLoading,
    hideLoading }, dispatch)
}

const DoctorListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorList)

export default DoctorListContainer
