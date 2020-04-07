import React, { Component } from "react";
import "./UserLogin.scss";
import { apiService } from "../../service/apiService";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import { regName, regPassword } from "../../utils/Pattern";

class userLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameLog: "",
      userNameErrorLog: "",
      passwordLog: "",
      passwordErrorLog: "",
      disabled: true,
      showMessage: false,
      validInput: false,
      error: ""
    };
  }

  allValid = () => {
    return (
      this.state.userNameLog &&
      this.state.passwordLog &&
      !this.state.passwordErrorLog &&
      !this.state.userNameErrorLog
    );
  };

  isValidForm = () => {
    if (this.allValid()) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  isValidUserName = () => {
    let result = regName(this.state.userNameLog);
    if (!result) {
      this.setState(
        {
          userNameErrorLog:
            "userName can only contain number, letter, dash, underscore, and dot"
        },
        this.isValidForm
      );
    } else {
      this.setState({ userNameErrorLog: "" }, this.isValidForm);
    }
  };

  isValidPassword = () => {
    let result = regPassword(this.state.passwordLog);
    if (!result) {
      this.setState(
        {
          passwordErrorLog:
            "password must contain at least 10 characters (letters or number)"
        },
        this.isValidForm
      );
    } else {
      this.setState({ passwordErrorLog: "" }, this.isValidForm);
    }
  };

  handleInput = ({ target: { name, value } }, func) => {
    this.setState(
      {
        [name]: value
      },
      func
    );
  };

  handleUserName = ({ target: { name, value } }) => {
    this.handleInput({ target: { name, value } }, this.isValidUserName);
  };

  handlePassword = ({ target: { name, value } }) => {
    this.handleInput({ target: { name, value } }, this.isValidPassword);
  };

  onSubmit = async e => {
    const { userNameLog, passwordLog } = this.state;
    const {
      showLoading,
      setToken,
      hideLoading,
      setUserData,
      history
    } = this.props;
    e.preventDefault();
    showLoading();
    await apiService
      .login({ userNameLog, passwordLog })
      .then(response => {
        setToken(response.data.apiToken);
        hideLoading();
        setUserData({ userNameLog, passwordLog });
        history.push("/personalAccount");
      })
      .catch(error => {
        hideLoading();
        if (error.response) {
          if (error.response.status === 400) {
            this.setState({
              showMessage: true,
              userNameLog: "",
              passwordLog: "",
              validInput: true
            });
          } else {
            this.setState({
              error: "Something went wrong, please try again later"
            });
          }
        } else {
          console.log("Strange Error", error.message);
          this.setState({
            error: "Something went wrong, please try again later"
          });
        }
      });
  };

  render() {
    const { action } = this.props;
    const {
      error,
      validInput,
      userNameLog,
      userNameErrorLog,
      passwordLog,
      passwordErrorLog,
      disabled,
      showMessage
    } = this.state;
    return (
      <>
        {action ? (
          <Spinner />
        ) : (
          <div className="wrapperLogComponent">
            {error && <div className="error"> {error} </div>}
            <div className="wrapperLogin">
              <form onSubmit={this.onSubmit}>
                <div className="text">
                  <h4>Access to your personal account</h4>
                </div>
                <div className="userName">
                  <span>Login:</span>
                  <input
                    required
                    pattern="^[A-Za-z0-9_\-.]+$"
                    name="userNameLog"
                    id="inputUserName"
                    className={
                      validInput
                        ? "form-control inputUserNameValid"
                        : "form-control"
                    }
                    value={userNameLog}
                    type="text"
                    onChange={this.handleUserName}
                    placeholder="Enter userName"
                  />
                  <span className="error">{userNameErrorLog}</span>
                </div>

                <div className="password">
                  <span> Password: </span>
                  <input
                    required
                    pattern="^([a-zA-Z0-9]{5,})+$"
                    className={
                      validInput
                        ? "form-control inputUserNameValid"
                        : "form-control"
                    }
                    id="inputPassword"
                    type="password"
                    value={passwordLog}
                    name="passwordLog"
                    onChange={this.handlePassword}
                    placeholder="Enter password"
                  />
                  <span className="error">{passwordErrorLog}</span>
                </div>
                <div className="wrapperButton">
                  <input
                    disabled={disabled}
                    className="btn btn-secondary"
                    type="submit"
                    value="Login"
                    data-testid="SignInTestId"
                  />
                </div>
              </form>
              {showMessage ? (
                <Message text={" Invalid login or password"} color={"red"} />
              ) : null}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default userLogin;
