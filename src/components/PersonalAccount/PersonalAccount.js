import React from "react";
import "./PersonalAccount.scss";
import DoctorList from "../DoctorList/DoctorListContainer";

const PersonalAccount = () => {
  return (
    <>
      <div className="infoPerson">
        <h4> Inform:</h4>
      </div>
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
