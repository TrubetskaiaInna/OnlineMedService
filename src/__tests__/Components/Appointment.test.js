import React from "react";
import Appointment from "../../components/Appointment/Appointment";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import { apiService } from "../../service/apiService";
jest.mock("../../components/Spinner/Spinner.js", () => () => "Spinner");
let appointment = [{ id: 1 }, { id: 2 }];
const showLoading = jest.fn();
const hideLoading = jest.fn();
const clearAppointmentData = jest.fn();
apiService.getAppointment = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = {
        data: {
          appointments: []
        }
      });
    })
    .catch(err => {
      console.log("err", err);
    });
});

test("render spinner", () => {
  let action = true;

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
  const action = false;

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
