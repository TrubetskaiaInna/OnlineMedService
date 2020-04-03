import React from "react";
import Appointment from "../../components/Appointment/Appointment";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import { apiService } from "../../service/apiService";
jest.mock("../../components/Spinner/Spinner.js", () => () => "Spinner");

test("render spinner", () => {
  let action = true;
  let appointment = [1, 2, 3, 4];
  let showLoading = jest.fn();

  const { getByText } = renderWithRedux(
    <Appointment
      action={action}
      appointment={appointment}
      showLoading={showLoading}
    />,
    {}
  );
  const linkElement = getByText(/Spinner/i);
  expect(linkElement).toBeInTheDocument();
});

test("render appointmentItem wrapper", () => {
  apiService.getAppointment = jest.fn(() => {
    return new Promise(resolve => {
      resolve({});
    })
      .then(response => {
        return (response = {
          data: {
            appointments: [{ id: 1 }, { id: 2 }]
          }
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  });
  let appointment = [];
  apiService.getAppointment(1).then(async res => {
    appointment = res.data.appointments;
    return appointment;
  });
  const action = false;
  const showLoading = jest.fn();
  const hideLoading = jest.fn();
  const clearAppointmentData = jest.fn();

  const { getByTestId } = renderWithRedux(
    <Appointment
      action={action}
      appointment={appointment}
      showLoading={showLoading}
      hideLoading={hideLoading}
      clearAppointmentData={clearAppointmentData}
    />,
    {}
  );
  const linkElement = getByTestId("SignInTestId");
  expect(linkElement).toBeInTheDocument();
});
