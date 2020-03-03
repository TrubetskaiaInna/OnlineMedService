import React  from 'react'
import { apiService } from "../../service/apiService";
import "./AppointmentItem.scss";

const AppointmentItem = props => {
  const cancelAppointment = async () => {
    const { appointment, token, setAppointmentData } = props;
    await apiService.cancelAppointment(appointment.id, token).then(() => {
      apiService.getAppointment(props.token).then(response => {
        setAppointmentData(response.data.appointments);
      });
    });
  };

  return (
    <>
      {(props.appointment.status === "created") ? (
        <div className="wrapperInfoEntry">
          <div className="infoEntry">
            <h5>Day:</h5>
            {props.appointment.day}
          </div>
          <div className="infoEntry">
            <h5>Time:</h5>
            {props.appointment.startTime}
          </div>
          <div className="infoEntry">
            <h5>Doctor:</h5>
            {props.appointment.doctor.fullName}
          </div>
          <button
            onClick={cancelAppointment}
            className="btnb btn-outline-primary"
          >
            Cancel
          </button>
        </div>
      ) :null}
    </>
  );
};

export default AppointmentItem;
