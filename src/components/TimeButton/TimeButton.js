import React from "react";

const TimeButton = props => {
  const now = new Date();
  const arr = props.element.startTime.split(":");
  const date = new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    props.date.getDate(),
    arr[0],
    arr[1] - 15
  );

  const getIdSchedule = () => {
    props.setSelectedData(props.element.id)
  };
  return (
    <>
      <button
        onClick={getIdSchedule}
        className="btn btn-secondary"
        disabled={!props.element.enabled || date - now < 0 ? true : null}
        id="time"
      >
        {props.element.startTime}-{props.element.endTime}
      </button>
    </>
  );
};

export default TimeButton;