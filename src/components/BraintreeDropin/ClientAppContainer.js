import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import clientApp from "./ClientApp";
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

const clientAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(clientApp);

export default clientAppContainer;
