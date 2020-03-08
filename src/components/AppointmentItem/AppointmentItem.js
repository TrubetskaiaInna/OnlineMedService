import React, { useEffect, useState } from "react";
import { apiService } from "../../service/apiService";
import "./AppointmentItem.scss";
import ExampleComponent from '../Braintree-dropin/clientAppContainer'

const AppointmentItem = props => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
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
  const cancelAppointment = async () => {
    const { appointment, token, setAppointmentData } = props;
    await apiService.cancelAppointment(appointment.id, token).then(() => {
      apiService.getAppointment(props.token).then(response => {
        setAppointmentData(response.data.appointments);
      });
    });
  };

  const isNumberDay = () => {
    let index = days.findIndex(day => day === props.appointment.day);
    return index;
  };

  const nextWeekdayDate = (date, day_in_week) => {
    const ret = new Date(date || new Date());
    ret.setDate(ret.getDate() + ((day_in_week - 1 - ret.getDay() + 7) % 7));
    return ret;
  };

  useEffect(() => {
    const date = new Date();
    const result = nextWeekdayDate(date, isNumberDay());
    const numberDay = result.getDate();
    const month = months[result.getMonth()];
    const year = result.getFullYear();
    setDay(numberDay + 1);
    setMonth(month);
    setYear(year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {props.appointment.status === "created" ? (
        <div className="wrapperInfoEntry">
          <div className="infoEntryData">
            <h5>Day:</h5>
            <span> {props.appointment.day},</span>
            <span> {day} </span>
            <span>{month}</span>
            <span>{year}</span>
          </div>
          <div className="infoEntry">
            <h5>Time:</h5>
            {props.appointment.startTime}
          </div>
          <div className="infoEntry">
            <h5>Doctor:</h5>
            {props.appointment.doctor.fullName}
          </div>
          <ExampleComponent/>
          <button
            onClick={cancelAppointment}
            className="btnb btn-outline-primary"
          >
            Cancel
          </button>
        </div>
      ) : null}
    </>
  );
};

export default AppointmentItem;
