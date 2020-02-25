import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Time from "./Time";
import { user, doctor, selectedDoctor, schedule, selectedData } from "../../actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.doctors,
    schedule: state.schedule.schedule,
    selectedData: state.selectedData.selectedData,
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  const { setSelectedDoctorData } = selectedDoctor;
  const  {setSelectedData, clearSelectedData} = selectedData
  const { setScheduleDoctor, clearScheduleDoctor } = schedule;
  return bindActionCreators(
    {
      setUserData,
      clearUserData,
      setDoctorData,
      clearDoctorData,
      setSelectedDoctorData,
      setScheduleDoctor,
      clearScheduleDoctor,
      setSelectedData,
      clearSelectedData
    },
    dispatch
  );
};

const TimeContainer = connect(mapStateToProps, mapDispatchToProps)(Time);

export default TimeContainer;
