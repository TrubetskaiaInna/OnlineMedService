import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TimeButton from "./TimeButton";
import { selectedDoctor, schedule, selectedData } from "../../actions";

const mapStateToProps = state => {
  return {
    selectedDoctors: state.selectedDoctor.doctors,
    schedule: state.schedule.schedule,
    selectedData: state.selectedData.selectedData,
  };
};

const mapDispatchToProps = dispatch => {
  const { setSelectedDoctorData } = selectedDoctor;
  const { setScheduleDoctor, clearScheduleDoctor } = schedule;
  const  {setSelectedData} = selectedData
  return bindActionCreators(
    {
      setSelectedDoctorData,
      setScheduleDoctor,
      clearScheduleDoctor,
      setSelectedData
    },
    dispatch
  );
};

const TimeButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TimeButton);

export default TimeButtonContainer;
