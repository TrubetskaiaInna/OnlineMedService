import React, { useEffect } from "react";
import "./Time.scss";
import TimeButton from "../TimeButton/TimeButtonContainer";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Time = props => {
  const day = days[props.date.getDay()];
  const numberDay = props.date.getDate();
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const weekend = [];
  for (let i = 0; i < props.weekend.length; i++) {
    weekend.push(days[props.weekend[i]]);
  }
  useEffect(() => {
    props.clearSelectedData();
    props.clearScheduleDoctor();
    const timeout = setTimeout(
      () => {
        props.history.push("/personalAccount");
      },
      1000 * 60 * 6,
      []
    );
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.history]);

  const getIdDoctor = () => {
    props.history.push("/personalAccount")
    props.clearSelectedData();
    console.log(1111, props.selectedData);
  };

  return (
    <>
      {/*<div className="wrapperTitle">*/}
      {/*  <h5>*/}
      {/*    {day}, {numberDay} {month} {year}*/}
      {/*  </h5>*/}
      {/*</div>*/}
      {weekend.map((element, index) => {
        return (
          day === element && (
            <div key={index}>This day is a doctor's day off</div>
          )
        );
      })}
      <div className="error">{props.error}</div>
      <div className="wrapperTime">
        {props.schedule.map(element => {
          return (
            element.day === day && (
              <div key={element.id}>
                <TimeButton element={element} date={props.date} />
              </div>
            )
          );
        })}
      </div>
      <div className="wrapperButton">
        <button
          disabled={!props.selectedData? true:null}
          onClick={getIdDoctor}
          className="btn btn-outline-primary"
        >
          Confirm
        </button>
      </div>
    </>
  );
};
export default Time;
