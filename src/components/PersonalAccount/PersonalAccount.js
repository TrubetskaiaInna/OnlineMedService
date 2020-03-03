import React from "react";
import "./PersonalAccount.scss";
import DoctorList from "../DoctorList/DoctorListContainer";
import Appointment from "../Appointment/AppointmentContainer";

const PersonalAccount = () => {
  return (
    <>
      <div className="infoTitle">
        <h4>Your entry at doctor</h4>
      </div>
        <Appointment />
      <div className="title">
        <h4>Select a doctor</h4>
      </div>
      <div className="wrapperCard">
        <DoctorList />
      </div>
    </>
  );
};

export default PersonalAccount;
