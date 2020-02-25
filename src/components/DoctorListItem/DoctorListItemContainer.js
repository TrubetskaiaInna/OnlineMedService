import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DoctorListItem from "./DoctorListItem";
import { user, doctor, selectedDoctor } from "../../actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    selectedDoctors: state.selectedDoctor.selectedDoctors
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  const { setSelectedDoctorData } = selectedDoctor;
  return bindActionCreators(
    {
      setUserData,
      clearUserData,
      setDoctorData,
      clearDoctorData,
      setSelectedDoctorData
    },
    dispatch
  );
};

const DoctorListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorListItem);

export default DoctorListItemContainer;
