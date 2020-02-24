import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Time from './Time'
import { user, doctor, selectedDoctor, schedule } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.doctors,
    schedule: state.schedule.schedule
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData, clearDoctorData } = doctor
  const { setSelectedDoctorData } = selectedDoctor
  const { setScheduleDoctor } = schedule
  return bindActionCreators({
    setUserData,
    clearUserData,
    setDoctorData,
    clearDoctorData,
    setSelectedDoctorData,
    setScheduleDoctor
  }, dispatch)
}

const TimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Time)

export default TimeContainer
