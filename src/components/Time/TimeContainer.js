import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Time from "./Time";
import { user, doctor, selectedDoctor, schedule, selectedData, token} from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.doctors,
    schedule: state.schedule.schedule,
    selectedData: state.selectedData.selectedData,
    token: state.token.token
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  const { setSelectedDoctorData } = selectedDoctor;
  const  {setSelectedData, clearSelectedData} = selectedData
  const { setScheduleDoctor, clearScheduleDoctor } = schedule;
  const { setToken, clearToken } = token;
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
      clearSelectedData,
      setToken,
      clearToken
    },
    dispatch
  );
};

const TimeContainer = connect(mapStateToProps, mapDispatchToProps)(Time);

export default TimeContainer;
