import React from "react";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import Header from "../../components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { act, fireEvent } from "@testing-library/react";
import { apiService } from "../../service/apiService";
const clearUserData = jest.fn();
const clearToken = jest.fn();
const clearAppointmentData = jest.fn();
apiService.logout = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = "logout");
    })
    .catch(err => {
      console.log("err", err);
    });
});

test("render NavLink Login", () => {
  const mainUser = {
    login: false
  };
  const { getByTestId, queryByTestId } = renderWithRedux(
    <BrowserRouter>
      <Header mainUser={mainUser} />
    </BrowserRouter>,
    {}
  );
  expect(getByTestId("Login")).toBeInTheDocument();
  expect(queryByTestId("NavLink")).toBeNull();
});

test("render NavLink Personal account", () => {
  const mainUser = {
    login: true,
    userNameLog: "Ivan"
  };
  const { getByTestId, getByText, queryByTestId } = renderWithRedux(
    <BrowserRouter>
      <Header mainUser={mainUser} />
    </BrowserRouter>,
    {}
  );
  expect(getByTestId("Personal")).toBeInTheDocument();
  expect(queryByTestId("Login")).toBeNull();
  expect(getByText("Ivan")).toBeInTheDocument();
});

test("click Exit", async () => {
  const mainUser = {
    login: true
  };
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <Header
        mainUser={mainUser}
        clearUserData={clearUserData}
        clearToken={clearToken}
        clearAppointmentData={clearAppointmentData}
      />
    </BrowserRouter>,
    {}
  );

  expect(getByTestId("SignInTestId")).toBeTruthy();
  await act(async () => {
    await fireEvent.click(getByTestId("SignInTestId"));
  });
  expect(apiService.logout).toBeCalled();
});
