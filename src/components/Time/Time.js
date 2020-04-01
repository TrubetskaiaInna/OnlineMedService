import React, { useEffect } from "react";
import "./Time.scss";
import TimeButton from "../TimeButton/TimeButtonContainer";
import { apiService } from "../../service/apiService";
import { calculationWeekend } from "../../utils/TimeUtils";
import { days } from '../../constants'

const Time = props => {
  const weekend = calculationWeekend(props.weekend);
  const day = days[props.date.getDay()];

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

  const getIdDoctor = async () => {
    await apiService.createAppointment(String(props.selectedData), props.token);
    props.history.push("/personalAccount");
    props.clearSelectedData();
  };

  return (
    <>
      <div className="title">Select a time</div>
      {weekend.map((element, index) => {
        return (
          day === element && <div key={index}>Today is a doctor's day off</div>
        );
      })}
      {props.error && <div className="error">{props.error}</div>}
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
          disabled={!props.selectedData ? true : null}
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
