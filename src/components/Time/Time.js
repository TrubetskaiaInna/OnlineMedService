import React, { useEffect } from "react";
import "./Time.scss";
import TimeButton from "../TimeButton/TimeButtonContainer";
import { apiService } from "../../service/apiService";
import { calculationWeekend, calculationDay } from "../../utils/TimeUtils";

const Time = props => {
  const weekend = calculationWeekend(props.weekend);
  const day = calculationDay(props.date);

  useEffect(() => {
    const { clearSelectedData, clearScheduleDoctor, history } = props;
    clearSelectedData();
    clearScheduleDoctor();
    const timeout = setTimeout(
      () => {
        history.push("/personalAccount");
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
    const { selectedData, token, history, clearSelectedData } = props;
    await apiService.createAppointment(String(selectedData), token);
    history.push("/personalAccount");
    clearSelectedData();
  };
  const { error, schedule, date, selectedData } = props;
  return (
    <>
      <div className="title">Select a time</div>
      {weekend.map((element, index) => {
        return (
          day === element && <div key={index}>Today is a doctor's day off</div>
        );
      })}
      {error && <div className="error">{error}</div>}
      <div className="wrapperTime" data-testid="wrapperTime">
        {schedule.map(element => {
          return (
            element.day === day && (
              <div key={element.id}>
                <TimeButton element={element} date={date} />
              </div>
            )
          );
        })}
      </div>
      <div className="wrapperButton">
        <button
          disabled={!selectedData ? true : null}
          onClick={getIdDoctor}
          className="btn btn-outline-primary"
          data-testid="SignInTestId"
        >
          Confirm
        </button>
      </div>
    </>
  );
};
export default Time;
