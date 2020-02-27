import React from "react";
import Data from "../Data/DataContainer";
import "./Entry.scss";

const Entry = props => {
  const { photo, fullName, type, info } = props.selectedDoctors;
  return (
    <div className="wrapperEntry">
      <div className="wrapperInfoDoctor">
        <div className="photoDoctor">
          <img className="photo" src={photo} alt="img" />
        </div>
        <div className="nameDoctor">
          <h3> {fullName}</h3>
        </div>
        <div className="typeDoctor">
          <h5> {type}</h5>
        </div>
        <div className="infoDoctor">
          <p>{info}</p>
        </div>
      </div>

      <Data history={props.history} />
    </div>
  );
};

export default Entry;
