import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { apiService } from "../../service/apiService";

const Header = props => {
  const exitFunction = async () => {
    const { clearUserData, clearToken } = props;
    clearUserData();
    await apiService.logout(props.token);
    clearToken();
  };

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
        {props.mainUser.login ? (
          <NavLink className="linc" to="/personalAccount">
            Personal account
          </NavLink>
        ) : (
          <NavLink className="linc" to="/login">
            Personal account
          </NavLink>
        )}
      </div>
      <div className="wrapperLinc">
        <NavLink className="linc" to="/contact">
          Contact
        </NavLink>
      </div>
      {props.mainUser.userNameLog}
      <div className="buttonLinc" onClick={exitFunction}>
        <NavLink className="linc" to="/">
          Exit
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
