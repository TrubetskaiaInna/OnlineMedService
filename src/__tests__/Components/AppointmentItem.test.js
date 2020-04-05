import React from "react";
import AppointmentItem from "../../components/AppointmentItem/AppointmentItem";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import { apiService } from "../../service/apiService";
import { act, fireEvent } from "@testing-library/react";

window.confirm = jest.fn(() => {
  return true;
});

apiService.cancelAppointment = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = "canceled");
    })
    .catch(err => {
      console.log("err", err);
    });
});

apiService.getAppointment = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = {
        data: {
          appointments: [
            {
              id: 2,
              day: "Thursday",
              status: "canceled",
              doctor: { fullName: "name" }
            }
          ]
        }
      });
    })
    .catch(err => {
      console.log("err", err);
    });
});

test("render element", () => {
  const appointment = {
    id: 1,
    day: "Monday",
    status: "created",
    doctor: { fullName: "name" }
  };
  const { getByText } = renderWithRedux(
    <AppointmentItem appointment={appointment} />,
    {}
  );
  const linkElement = getByText(/Monday/i);
  expect(linkElement).toBeInTheDocument();
});

test("cancel element", async () => {
  let appointment = {
    id: 2,
    day: "Thursday",
    status: "created",
    doctor: { fullName: "name" }
  };

  let setAppointmentData = jest.fn(() => {
    return (appointment = {
      id: 2,
      day: "Thursday",
      status: "canceled",
      doctor: { fullName: "name" }
    });
  });

  const { getByTestId } = renderWithRedux(
    <AppointmentItem
      appointment={appointment}
      setAppointmentData={setAppointmentData}
    />,
    {}
  );

  expect(getByTestId("SignInTestId")).toBeTruthy();
  await act(async () => {
    await fireEvent.click(getByTestId("SignInTestId"));
  });

  const updateProps = props =>
    renderWithRedux(<AppointmentItem {...props} />, {});
  updateProps({ appointment: setAppointmentData() });

  expect(apiService.cancelAppointment).toBeCalled();
  expect(apiService.getAppointment).toBeCalled();
});
