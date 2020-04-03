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
    const {
      token,
      setAppointmentData,
      hideLoading,
      clearAppointmentData
    } = this.props;
    await apiService
      .getAppointment(token)
      .then(response => {
        hideLoading();
        setAppointmentData(response.data.appointments);
      })
      .catch(() => {
        hideLoading();
        clearAppointmentData();
        this.setState({ error: "download failed, please try again later" });
      });
  };

  render() {
    const { appointment, action } = this.props;
    const { error } = this.state;
    return (
      <>
        {error && <div className="errorGetDoctor">{error}</div>}
        {action ? (
          <Spinner />
        ) : (
          <div data-testid='SignInTestId'>
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
