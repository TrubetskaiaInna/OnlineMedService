import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Appointment from "./Appointment";
import { token, appointment } from "../../actions";

const mapStateToProps = state => {
  return {
    token: state.token.token,
    appointment: state.appointment.appointment
  };
};

const mapDispatchToProps = dispatch => {
  const { setToken, clearToken } = token;
  const { setAppointmentData } = appointment;
  return bindActionCreators(
    {
      setToken,
      clearToken,
      setAppointmentData
    },
    dispatch
  );
};

const AppointmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointment);

export default AppointmentContainer;
