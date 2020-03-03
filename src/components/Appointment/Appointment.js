import React, { Component } from "react";
import { apiService } from "../../service/apiService";
import AppointmentItem from "../AppointmentItem/AppointmentItemContainer";
import Spinner from "../Spinner/Spinner";

class Appointment extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }
  componentDidMount = async () => {
    this.props.showLoading();
    const { token, setAppointmentData } = this.props;
    await apiService
      .getAppointment(token)
      .then(response => {
        this.props.hideLoading();
        setAppointmentData(response.data.appointments);
      })
      .catch(error => {
        // console.log(error);
        this.props.hideLoading();
        this.props.clearAppointmentData()
        this.setState({ error: "download failed, please try again later" });
      });
  };

  render() {
    const { appointment } = this.props;
    return (
      <>
        <div className="errorGetDoctor">{this.state.error}</div>
        {this.props.action ? (
          <Spinner />
        ) : (
          <div>
            {appointment.map(appointment => {
              return (
                <AppointmentItem
                  key={appointment.id}
                  appointment={appointment}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Appointment;
