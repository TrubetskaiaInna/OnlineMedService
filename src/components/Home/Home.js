import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = props => {
  const { login } = props.mainUser;
  return (
    <>
      <div className="image" />
      <ul className="homeText">
        <li>Quick recording and cancellation of reception</li>
        <li>Favorite doctors</li>
        <li>List of your medical events</li>
        <li>Online payment for services</li>
      </ul>
      <div className="btn btn-outline-secondary" id="btn">
        {login ? (
          <NavLink className="linc" to="/personalAccount">
            Make an appointment
          </NavLink>
        ) : (
          <NavLink className="linc" to="/login">
            Make an appointment
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Home;
