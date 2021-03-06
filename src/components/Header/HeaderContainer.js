import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "./Header";
import { user, doctor, token, appointment } from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors,
    token: state.token.token
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  const { setToken, clearToken } = token;
  const { clearAppointmentData } = appointment;
  return bindActionCreators(
    {
      setUserData,
      clearUserData,
      setDoctorData,
      clearDoctorData,
      setToken,
      clearToken,
      clearAppointmentData
    },
    dispatch
  );
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
