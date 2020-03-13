import React, { useEffect, useState } from "react";
import { apiService } from "../../service/apiService";
import "./AppointmentItem.scss";
import PaymentModal from "../PaymentModal/PaymentModal";
import Message from "../Message/Message";

const AppointmentItem = props => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [colorMessage, setColorMessage] = useState("orange");
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
    setShowMessage(false);
    const { appointment, token, setAppointmentData } = props;
    await apiService
      .cancelAppointment(appointment.id, token)
      .then(() => {
        setShowMessage(true);
        setTextMessage("You canceled the appointment");
        apiService.getAppointment(props.token).then(response => {
          setAppointmentData(response.data.appointments);
          response.data.appointments.forEach(el => {
            if (el.id === appointment.id && el.isRefunded) {
              setTextMessage(
                "You canceled the appointment, money will be returned"
              );
            }
          });
        });
      })
      .catch(() => {
        setShowMessage(true);
        setColorMessage("red");
        setTextMessage("Download failed, please try again later");
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
          <PaymentModal appointment={props.appointment} />
          <div>
            <button
              onClick={cancelAppointment}
              className="btn-sm btn-outline-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {showMessage ? <Message text={textMessage} color={colorMessage} /> : null}
    </>
  );
};

export default AppointmentItem;
