import React, { useEffect } from 'react'
import "./Time.scss";
import TimeButton from "../TimeButton/TimeButton";

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.history.push('/personalAccount')
    }, 1000*60*10,[])
    return () => {
      props.clearScheduleDoctor()
      clearTimeout(timeout);
    }
  }, [props.history]);

  return (
    <>
      <div className="wrapperTitle">
        <h5>
          {day}, {numberDay} {month} {year}
        </h5>
      </div>
      <div className='error'>{props.error}</div>
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
        <button className="btn btn-outline-primary">Confirm</button>
      </div>
    </>
  );
};
export default Time;
