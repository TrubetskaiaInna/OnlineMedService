import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PersonalAccount from "./PersonalAccount";
import { user, doctor } from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    appointment: state.appointment.appointment,
    token: state.token.token
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  return bindActionCreators(
    {
      setUserData,
      clearUserData,
      setDoctorData,
      clearDoctorData
    },
    dispatch
  );
};

const PersonalAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalAccount);

export default PersonalAccountContainer;
