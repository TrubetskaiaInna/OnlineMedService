import React, {Component} from "react";
import braintree from "braintree-web-drop-in";
import PropTypes from "prop-types";
import PaymentComponent from "../PaymentComponent/PaymentComponent";
import { apiService } from "../../service/apiService";
import { Error } from "../Error/Error";
import Message from "../Message/Message";

const renderSubmitButton = ({ onClick, isDisabled, text }) => {
  return (
    <div className="wrapperButton">
      <button
        className="btn btn-outline-warning"
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};

renderSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorizationToken: "",
      actionError: false,
      showMessage: false
    };
  }

  componentDidMount() {
    const {token} =this.props
    apiService
      .getAuthorizationTokenPayment(token)
      .then(response => {
        this.setState({ authorizationToken: response.data.clientToken });
      })
      .catch(error => {
        this.errorAction();
        console.log(error);
      });
  }

  errorAction = () => {
    this.setState({ actionError: !this.state.actionError });
  };

  showMessage = () => {
    this.setState({
      showMessage: true
    });
  };

  handlePaymentMethod = payload => {
    console.log("payload", payload);
  };

  onCreate = () => {
    console.log("onCreate");
  };

  onDestroyStart = () => {
    console.log("onDestroyStart");
  };

  onDestroyEnd = () => {
    console.log("onDestroyEnd");
  };

  onError = error => {
    console.log("onError", error);
  };

  render() {
    const token = this.state.authorizationToken;
    return (
      <>
        {token ? (
          <PaymentComponent
            braintree={braintree}
            options={{
              locale: "en_US",
              vaultManager: false
            }}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            onCreate={this.onCreate}
            onDestroyStart={this.onDestroyStart}
            onDestroyEnd={this.onDestroyEnd}
            onError={this.onError}
            renderSubmitButton={renderSubmitButton}
            token={this.props.token}
            appointment={this.props.appointment}
            errorAction={this.errorAction}
            showMessage={this.showMessage}
            handleClose={this.props.handleClose}
            showButton={this.props.showButton}
          />
        ) : null}
        {this.state.actionError && <Error errorAction={this.errorAction} />}
        {this.state.showMessage && (
          <Message text={"Payment was successful!"} color={"green"} />
        )}
      </>
    );
  }
}

export default Payment;
