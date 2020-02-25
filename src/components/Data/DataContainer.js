import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Data from "./Data";
import { user, doctor, selectedDoctor, schedule, spinner } from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.doctors,
    schedule: state.schedule.schedule,
    action: state.spinner.action
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  const { setSelectedDoctorData } = selectedDoctor;
  const { setScheduleDoctor, clearScheduleDoctor } = schedule;
  const { showLoading, hideLoading } = spinner;
  return bindActionCreators(
    {
      setUserData,
      clearUserData,
      setDoctorData,
      clearDoctorData,
      setSelectedDoctorData,
      setScheduleDoctor,
      clearScheduleDoctor,
      showLoading,
      hideLoading
    },
    dispatch
  );
};

const DataContainer = connect(mapStateToProps, mapDispatchToProps)(Data);

export default DataContainer;
