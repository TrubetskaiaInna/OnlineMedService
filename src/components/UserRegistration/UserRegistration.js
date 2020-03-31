import React, { Component } from "react";
import MaskedInput from "react-text-mask";
import { RadioButton } from "primereact/radiobutton";
import "./UserRegistration.scss";
import { apiService } from "../../service/apiService";
import Spinner from "../Spinner/Spinner";
import { regEmail, regName, regPassword, regPhone } from "../../utils/Pattern";

export default class userRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      userName: "",
      userNameError: "",
      userNameValid: "",
      actionUserNameValid: false,
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
      actionPhoneError: false,
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: "",
      actionConfirmPasswordError: false,
      address: "",
      sex: "",
      additionalInfo: "",
      disabled: true,
      error: ""
    };
  }

  allValid = () => {
    return (
      this.state.firstName &&
      this.state.lastName &&
      this.state.userName &&
      this.state.sex &&
      this.state.password &&
      this.state.confirmPassword &&
      this.state.phone &&
      this.state.address &&
      !this.state.emailError &&
      !this.state.passwordError &&
      !this.state.confirmPasswordError &&
      !this.state.firstNameError &&
      !this.state.lastNameError &&
      !this.state.userNameError &&
      !this.state.phoneError
    );
  };

  isValidForm = () => {
    if (this.allValid()) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.isValidForm();
      }
    );
  };

  handleInputValid = ({ target: { name, value } }, func) => {
    this.setState(
      {
        [name]: value
      },
      func
    );
  };

  isValidFirstName = () => {
    let result = regName(this.state.firstName);
    if (!result) {
      this.setState(
        { firstNameError: "first name can only contain letters" },
        this.isValidForm
      );
    } else {
      this.setState({ firstNameError: "" }, this.isValidForm);
    }
  };

  handleFirsName = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidFirstName);
  };

  isValidLastName = () => {
    let result = regName(this.state.lastName);
    if (!result) {
      this.setState(
        { lastNameError: "last name can only contain letters" },
        this.isValidForm
      );
    } else {
      this.setState({ lastNameError: "" }, this.isValidForm);
    }
  };

  handleLastName = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidLastName);
  };

  isValidUserName = () => {
    let result = regName(this.state.userName);
    if (!result) {
      this.setState(
        {
          userNameError:
            "userName can only contain number, letter, dash, underscore, and dot"
        },
        this.isValidForm
      );
    } else {
      this.setState({ userNameError: "" }, this.isValidForm);
    }
  };

  handleUserName = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidUserName);
  };

  isValidPhone = () => {
    let result = regPhone(this.state.phone);
    if (!result) {
      this.setState(
        {
          phoneError: "enter valid telephone number",
          actionPhoneError: true
        },
        this.isValidForm
      );
    } else {
      this.setState(
        {
          phoneError: "",
          actionPhoneError: false
        },
        this.isValidForm
      );
    }
  };

  handlePhone = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidPhone);
  };

  isValidMatchPassword = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState(
        {
          confirmPasswordError: "password does not match",
          actionConfirmPasswordError: true
        },
        this.isValidForm
      );
    } else {
      this.setState(
        {
          confirmPasswordError: "",
          actionConfirmPasswordError: false
        },
        this.isValidForm
      );
    }
  };

  isValidPassword = () => {
    let result = regPassword(this.state.password);
    if (!result) {
      this.setState(
        {
          passwordError:
            "password must contain at least 10 characters (letters or number)"
        },
        this.isValidMatchPassword
      );
    } else {
      this.setState({ passwordError: "" }, this.isValidMatchPassword);
    }
  };

  handlePassword = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidPassword);
  };

  isValidConfPassword = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState(
        {
          confirmPasswordError: "password does not match",
          actionConfirmPasswordError: true
        },
        this.isValidForm
      );
    } else {
      this.setState(
        {
          confirmPasswordError: "",
          actionConfirmPasswordError: false
        },
        this.isValidForm
      );
    }
  };

  handleConfPassword = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidConfPassword);
  };

  handleRadio = e => {
    this.setState(
      {
        sex: e.target.value
      },
      this.isValidForm
    );
  };

  isValidEmail = () => {
    let result = regEmail(this.state.email);
    if (!result) {
      this.setState({ emailError: "enter valid email" }, this.isValidForm);
    } else {
      this.setState({ emailError: "" }, this.isValidForm);
    }
  };

  handleEmail = ({ target: { name, value } }) => {
    this.handleInputValid({ target: { name, value } }, this.isValidEmail);
  };

  catchError = error => {
    if (error.response) {
      if (error.response.status === 500) {
        this.setState(
          {
            userNameValid: "user with that name already exists",
            actionUserNameValid: true
          },
          this.isValidForm
        );
      } else {
        this.setState(
          { error: "Having problems, please try again later" },
          this.isValidForm
        );
      }
    } else {
      this.setState(
        { error: "Having problems, please try again later" },
        this.isValidForm
      );
    }
  };

  onSubmit = async e => {
    const { showLoading, history, hideLoading } = this.props;
    e.preventDefault();
    showLoading();
    const {
      firstName,
      lastName,
      email,
      userName,
      password,
      address,
      phone,
      sex,
      additionalInfo
    } = this.state;
    const newUserForm = {
      firstName,
      lastName,
      email,
      userName,
      password,
      address,
      phone,
      sex,
      additionalInfo
    };
    await apiService
      .registration(newUserForm)
      .then(() => {
        history.push("/login");
        hideLoading();
      })
      .catch(error => {
        hideLoading();
        this.catchError(error);
      });
  };

  render() {
    const {
      action,
      error,
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      actionUserNameValid,
      userName,
      userNameError,
      userNameValid,
      actionPhoneError,
      phone,
      phoneError,
      password,
      passwordError,
      actionConfirmPasswordError,
      confirmPassword,
      confirmPasswordError,
      address,
      sex,
      email,
      emailError,
      additionalInfo,
      disabled
    } = this.state;
    return (
      <>
        {action ? (
          <Spinner />
        ) : (
          <div className="wrapperRegComponent">
            {error && <div className="error">{error}</div>}
            <div className="wrapperForm">
              <form onSubmit={this.onSubmit}>
                <div className="firstName">
                  <span>
                    <span className="important"> * </span> First name:{" "}
                  </span>
                  <input
                    required
                    pattern="^[a-zA-Z]+$"
                    name="firstName"
                    id="inputFirstName"
                    className="form-control"
                    type="text"
                    value={firstName}
                    onChange={this.handleFirsName}
                    placeholder="Enter first name"
                  />
                  <span className="error">{firstNameError}</span>
                </div>

                <div className="lastName">
                  <span>
                    <span className="important"> * </span>Last name:
                  </span>
                  <input
                    required
                    pattern="^[a-zA-Z]+$"
                    name="lastName"
                    className="form-control"
                    id="inputLastName"
                    value={lastName}
                    type="text"
                    onChange={this.handleLastName}
                    placeholder="Enter last name"
                  />
                  <span className="error">{lastNameError}</span>
                </div>

                <div className="userName">
                  <span>
                    <span className="important"> * </span>UserName:
                  </span>
                  <input
                    required
                    pattern="^[A-Za-z0-9_\-.]+$"
                    name="userName"
                    className="form-control"
                    id={
                      actionUserNameValid
                        ? "inputUserNameError"
                        : "inputUserName"
                    }
                    value={userName}
                    type="text"
                    onChange={this.handleUserName}
                    placeholder="Enter user name"
                  />
                  <span className="error">{userNameError}</span>
                  <span className="error">{userNameValid}</span>
                </div>

                <div className="phone">
                  <span>
                    <span className="important"> * </span> Telephone:{" "}
                  </span>
                  <MaskedInput
                    required
                    mask={[
                      "+", /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/
                    ]}
                    name="phone"
                    className="form-control"
                    id={actionPhoneError ? "inputPhoneError" : "inputPhone"}
                    value={phone}
                    type="text"
                    onChange={this.handlePhone}
                    placeholder="Enter telephone"
                  />
                  <span className="error">{phoneError}</span>
                </div>

                <div className="password">
                  <span>
                    <span className="important"> * </span> Password:{" "}
                  </span>
                  <input
                    required
                    pattern="^([a-zA-Z0-9]{10,})+$"
                    className="form-control"
                    id="inputPassword"
                    type="password"
                    value={password}
                    name="password"
                    onChange={this.handlePassword}
                    placeholder="Enter password"
                  />
                  <span className="error">{passwordError}</span>
                </div>

                <div className="confirmPassword">
                  <span>
                    <span className="important"> * </span>Confirm password:{" "}
                  </span>
                  <input
                    id={
                      actionConfirmPasswordError
                        ? "inputConfirmPasswordError"
                        : "inputConfirmPassword"
                    }
                    required
                    value={confirmPassword}
                    name="confirmPassword"
                    className="form-control"
                    type="password"
                    onChange={this.handleConfPassword}
                    placeholder="Enter password"
                  />
                  <span className="error">{confirmPasswordError}</span>
                </div>

                <div className="address">
                  <span>
                    <span className="important"> * </span>Address:{" "}
                  </span>
                  <input
                    required
                    value={address}
                    name="address"
                    className="form-control"
                    id="inputAddress"
                    type="address"
                    onChange={this.handleInput}
                    placeholder="Enter address"
                  />
                </div>

                <div className="sex">
                  <span>
                    <span className="important"> * </span> Sex:{" "}
                  </span>
                  <div className="wrapperRadio">
                    <RadioButton
                      type="radio"
                      value="Women"
                      checked={sex === "Women"}
                      onChange={this.handleRadio}
                    />
                    <label>women</label>

                    <RadioButton
                      type="radio"
                      value="Men"
                      checked={sex === "Men"}
                      onChange={this.handleRadio}
                    />
                    <label>men</label>
                  </div>
                </div>

                <div className="email">
                  <span> Email: </span>
                  <input
                    name="email"
                    pattern="^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$"
                    className="form-control"
                    id="inputEmail"
                    value={email}
                    type="text"
                    onChange={this.handleEmail}
                    placeholder="Enter email"
                  />
                  <span className="error">{emailError}</span>
                </div>

                <div className="info">
                  <span>Additional info:</span>
                  <textarea
                    value={additionalInfo}
                    name="additionalInfo"
                    onChange={this.handleInput}
                    className="form-control"
                  />
                </div>

                <div className="wrapperButton">
                  <input
                    disabled={disabled}
                    className="btn btn-outline-primary"
                    type="submit"
                    value="Registration"
                  />
                </div>

                <span className="infoUser">* field is required</span>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}
