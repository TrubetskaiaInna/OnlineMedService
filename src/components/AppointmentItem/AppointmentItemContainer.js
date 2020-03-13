import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppointmentItem from "./AppointmentItem";
import { token, appointment } from "../../actions";

const mapStateToProps = state => {
  return {
    token: state.token.token
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

const AppointmentItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentItem);

export default AppointmentItemContainer;
