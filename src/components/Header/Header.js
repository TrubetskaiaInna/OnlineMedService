import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { apiService } from "../../service/apiService";

const Header = props => {
  const exitFunction = async () => {
    const { clearUserData, clearToken, token, clearAppointmentData } = props;
    clearUserData();
    await apiService.logout(token);
    clearToken();
    clearAppointmentData();
  };
  const { login, userNameLog } = props.mainUser;
  return (
    <header>
      <div className="wrapperLinc">
        <NavLink className="linc" to="/">
          <h1>OnlineMedService</h1>
        </NavLink>
      </div>
      <div className="wrapperLinc">
        <NavLink className="linc" to="/about">
          About us
        </NavLink>
      </div>
      <div className="wrapperLinc">
        <NavLink className="linc" to="/registration">
          Registration
        </NavLink>
      </div>
      <div className="wrapperLinc">
        {login ? (
          <NavLink
            className="linc"
            to="/personalAccount"
            data-testid="Personal"
          >
            Personal account
          </NavLink>
        ) : (
          <NavLink className="linc" to="/login" data-testid="Login">
            Personal account
          </NavLink>
        )}
      </div>
      <div className="wrapperLinc">
        <NavLink className="linc" to="/contact">
          Contact
        </NavLink>
      </div>
      {userNameLog}
      <div
        className="buttonLinc"
        onClick={exitFunction}
        data-testid="SignInTestId"
      >
        <NavLink className="linc" to="/">
          Exit
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
