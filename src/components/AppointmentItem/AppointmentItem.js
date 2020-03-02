import React from "react";
import { apiService } from "../../service/apiService";

const AppointmentItem = props => {
  const cancelAppointment = async () => {
    const { appointment, token, setAppointmentData } = props;
    await apiService.cancelAppointment(appointment.id, token).then(response => {
      apiService.getAppointment(props.token).then(response => {
        setAppointmentData(response.data.appointments);
      });
    });
  };

  return (
    <>
      {props.appointment.status === "created" ? (
        <div>
          <span>{props.appointment.day}</span>
          <span>{props.appointment.startTime}</span>
          <span>{props.appointment.doctor.fullName}</span>
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
