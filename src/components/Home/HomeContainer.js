import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Home from "./Home";
import { user, doctor } from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  const { setDoctorData, clearDoctorData } = doctor;
  return bindActionCreators(
    { setUserData, clearUserData, setDoctorData, clearDoctorData },
    dispatch
  );
};

const HomeComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeComponentContainer;
