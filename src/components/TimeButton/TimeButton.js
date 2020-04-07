import React from "react";
import { calculationDate } from "../../utils/TimeUtils";

const TimeButton = props => {
  const { element, date } = props;
  const now = new Date();
  const data = calculationDate(element, date);
  const getIdSchedule = () => {
    props.setSelectedData(element.id);
  };
  return (
    <>
      <button
        onClick={getIdSchedule}
        className="btn btn-secondary"
        disabled={!element.enabled || data - now < 0 ? true : null}
        id="time"
        data-testid="SignInTestId"
      >
        {element.startTime}-{element.endTime}
      </button>
    </>
  );
};

export default TimeButton;
