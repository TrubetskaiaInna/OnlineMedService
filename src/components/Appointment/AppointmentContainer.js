import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Appointment from "./Appointment";
import { token, appointment, spinner } from "../../actions";

const mapStateToProps = state => {
  return {
    token: state.token.token,
    appointment: state.appointment.appointment,
    action: state.spinner.action
  };
};

const mapDispatchToProps = dispatch => {
  const { setToken, clearToken } = token;
  const { setAppointmentData, clearAppointmentData } = appointment;
  const { showLoading, hideLoading } = spinner;
  return bindActionCreators(
    {
      setToken,
      clearToken,
      setAppointmentData,
      showLoading,
      hideLoading,
      clearAppointmentData
    },
    dispatch
  );
};

const AppointmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);

export default AppointmentContainer;
