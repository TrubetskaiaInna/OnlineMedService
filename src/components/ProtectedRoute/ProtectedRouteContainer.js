import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {ProtectedRoute} from "./ProtectedRoute";
import { user } from "../../actions";

const mapStateToProps = state => {
  return {
    mainUser: state.user.mainUser
  };
};

const mapDispatchToProps = dispatch => {
  const { setUserData, clearUserData } = user;
  return bindActionCreators(
    {
      setUserData,
      clearUserData
    },
    dispatch
  );
};

const ProtectedRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute);

export default ProtectedRouteContainer;
