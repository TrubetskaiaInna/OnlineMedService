import React from "react";
import braintree from "braintree-web-drop-in";
import PropTypes from "prop-types";
import BraintreeDropin from "../BraintreeDropIn/BraintreeDropIn";
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

class ExampleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      authorizationToken: "",
      actionError: false,
      showMessage: false
    };
  }

  componentDidMount() {
    apiService
      .getAuthorizationTokenPayment(this.props.token)
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
          <BraintreeDropin
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

export default ExampleComponent;
