import React, { Component } from "react";
import PropTypes from "prop-types";
import { apiService } from "../../service/apiService";

class BraintreeDropIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropInInstance: null,
      isSubmitButtonDisabled: true
    };
  }

  componentDidMount = () => {
    const { dropInInstance } = this.state;
    const { braintree } = this.props;
    if (!braintree || dropInInstance) return;
    this.setup();
  };

  componentDidUpdate = prevProps => {
    const { authorizationToken, locale, onError } = this.props;
    const { dropInInstance } = this.state;
    if (
      authorizationToken &&
      dropInInstance &&
      (prevProps.authorizationToken !== authorizationToken ||
        prevProps.locale !== locale)
    ) {
      this.tearDown()
        .then(() => {
          this.setState(
            {
              dropInInstance: null,
              isSubmitButtonDisabled: true
            },
            () => {
              this.setup();
            }
          );
        })
        .catch(err => {
          if (onError) {
            onError(err);
          }
        });
    }
  };

  componentWillUnmount = () => {
    const { dropInInstance } = this.state;
    const { onError } = this.props;
    if (!dropInInstance) return;

    this.tearDown().catch(err => {
      if (onError) {
        onError(err);
      }
    });
  };

  setup = () => {
    const {
      locale,
      paypal,
      paypalCredit,
      paymentOptionPriority,
      card,
      authorizationToken,
      braintree,
      onError,
      onCreate
    } = this.props;
    const options = {
      locale: locale,
      paypal: paypal,
      paypalCredit: paypalCredit,
      paymentOptionPriority: paymentOptionPriority,
      card: card,
      ...this.props.options,
      authorization: authorizationToken,
      container: ".braintree-dropin-react-form"
    };
    braintree.create(options, (err, dropinInstance) => {
      if (err) {
        if (onError) {
          onError(err);
        }
        return;
      } else {
        if (onCreate) {
          onCreate(dropinInstance);
        }
      }

      if (dropinInstance.isPaymentMethodRequestable()) {
        this.setState({
          isSubmitButtonDisabled: false
        });
      }

      dropinInstance.on("paymentMethodRequestable", () => {
        this.setState({
          isSubmitButtonDisabled: false
        });
      });

      dropinInstance.on("noPaymentMethodRequestable", () => {
        this.setState({
          isSubmitButtonDisabled: true
        });
      });

      this.setState({
        dropInInstance: dropinInstance
      });
    });
  };

  tearDown = () => {
    const { onDestroyStart, onDestroyEnd } = this.props;
    const { dropInInstance } = this.state;
    if (onDestroyStart) {
      onDestroyStart();
    }
    return new Promise((resolve, reject) => {
      dropInInstance.teardown(err => {
        if (onDestroyEnd) {
          onDestroyEnd(err);
        }
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    });
  };

  handleSubmit = () => {
    const { dropInInstance, isSubmitButtonDisabled } = this.state;
    const {
      onError,
      handlePaymentMethod,
      appointment,
      token,
      showMessage,
      handleClose,
      showButton,
      errorAction
    } = this.props;
    if (dropInInstance && !isSubmitButtonDisabled) {
      this.setState({ isSubmitButtonDisabled: true }, () => {
        dropInInstance.requestPaymentMethod((err, payload) => {
          this.setState({
            isSubmitButtonDisabled: false
          });
          if (err) {
            if (onError) {
              onError(err);
            }
          } else {
            handlePaymentMethod(payload);
            apiService
              .payment(payload.nonce, appointment.id, token)
              .then(response => {
                console.log(response);
                showMessage();
                setTimeout(() => {
                  handleClose();
                }, 5500);
                showButton();
              })
              .catch(error => {
                console.log(error);
                errorAction();
              });
          }
        });
      });
    }
  };

  render = () => {
    return (
      <div className={this.props.className}>
        <div className="braintree-dropin-react-form" />
        <div className="braintree-dropin-react-submit-btn-wrapper">
          {this.props.renderSubmitButton({
            onClick: this.handleSubmit,
            isDisabled: this.state.isSubmitButtonDisabled,
            text: this.props.submitButtonText
          })}
        </div>
      </div>
    );
  };
}

BraintreeDropIn.propTypes = {
  braintree: PropTypes.object.isRequired,
  options: PropTypes.object,
  authorizationToken: PropTypes.string.isRequired,
  handlePaymentMethod: PropTypes.func.isRequired,
  onCreate: PropTypes.func,
  onError: PropTypes.func,
  onDestroyStart: PropTypes.func,
  onDestroyEnd: PropTypes.func,
  locale: PropTypes.string,
  paypal: PropTypes.object,
  paypalCredit: PropTypes.object,
  paymentOptionPriority: PropTypes.array,
  card: PropTypes.object,
  submitButtonText: PropTypes.string,
  className: PropTypes.string,
  renderSubmitButton: PropTypes.func
};

const renderSubmitButton = ({ onClick, isDisabled, text }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

renderSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

BraintreeDropIn.defaultProps = {
  className: "braintree-dropin-react",
  submitButtonText: "Confirm",
  renderSubmitButton
};

export default BraintreeDropIn;
