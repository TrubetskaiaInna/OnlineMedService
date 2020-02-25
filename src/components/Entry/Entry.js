import React from "react";
import Data from "../Data/DataContainer";
import "./Entry.scss";

const Entry = props => {
  return (
    <div className="wrapperEntry">
      <div className="wrapperInfoDoctor">
        <div className="photoDoctor">
          <img className="photo" src={props.selectedDoctors.photo} alt="img" />
        </div>
        <div className="nameDoctor">
          <h3> {props.selectedDoctors.fullName}</h3>
        </div>
        <div className="typeDoctor">
          <h5> {props.selectedDoctors.type}</h5>
        </div>
        <div className="infoDoctor">
          <p>{props.selectedDoctors.info}</p>
        </div>
      </div>

      <Data history={props.history} />
    </div>
  );
};

export default Entry;
