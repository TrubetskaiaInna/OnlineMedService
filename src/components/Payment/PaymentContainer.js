import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Payment from "./Payment";
import { token } from "../../actions";

const mapStateToProps = state => {
  return {
    token: state.token.token
  };
};

const mapDispatchToProps = dispatch => {
  const { setToken, clearToken } = token;
  return bindActionCreators(
    {
      setToken,
      clearToken
    },
    dispatch
  );
};

const paymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);

export default paymentContainer;
