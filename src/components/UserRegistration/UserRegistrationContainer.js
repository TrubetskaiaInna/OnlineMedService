import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserRegistrationComponent from "./UserRegistration";
import { user, doctor, spinner } from "../../actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    action: state.spinner.action
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData } = doctor;
  const { showLoading, hideLoading } = spinner;
  return bindActionCreators(
    { setUserData, clearUserData, setDoctorData, hideLoading, showLoading },
    dispatch
  );
};

const UserRegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistrationComponent);

export default UserRegistrationContainer;
