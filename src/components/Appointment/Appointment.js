import React, { Component } from "react";
import { apiService } from "../../service/apiService";
import AppointmentItem from "../AppointmentItem/AppointmentItemContainer";

class Appointment extends Component {

  componentDidMount = async () => {
    const { token, setAppointmentData } = this.props;
    await apiService.getAppointment(token).then(response => {
      setAppointmentData(response.data.appointments);
    });
  };

  render() {
    const { appointment } = this.props;
    return (
      <>
        {appointment.map(appointment => {
          return (
            <div key={appointment.id}>
              <AppointmentItem appointment={appointment} />
            </div>
          );
        })}
      </>
    );
  }
}

export default Appointment;
