import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Data from './Data'
import { user, doctor, selectedDoctor } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.doctors
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData, clearDoctorData } = doctor
  const { setSelectedDoctorData } = selectedDoctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData, clearDoctorData, setSelectedDoctorData }, dispatch)
}

const DataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)

export default DataContainer
