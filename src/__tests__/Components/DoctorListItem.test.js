import React from "react";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import DoctorListItem from '../../components/DoctorListItem/DoctorListItem'
import { BrowserRouter } from 'react-router-dom'
import { act, fireEvent } from '@testing-library/react'
jest.mock("../../components/Info/Info.js", () => () => "TransitionsModal");
const setSelectedDoctorData = jest.fn();
const doctor = {
  fullName: 'Ivan',
  type: 'Surgeon',
  photo: '111'
}

test("render div", () => {
  const user = {
    login: false
  }
  const { getByTestId, queryByTestId } = renderWithRedux(
    <DoctorListItem
     doctor={doctor}
     user={user}
    />,
    {}
  );
  expect(getByTestId("Div")).toBeInTheDocument();
  expect(queryByTestId("NavLink")).toBeNull();
});

test("render NavLink", async () => {
  const user = {
    login: true
  }
  const { getByTestId, queryByTestId } = renderWithRedux(
    <BrowserRouter>
    <DoctorListItem
      doctor={doctor}
      user={user}
    />
    </BrowserRouter>,
    {}
  );
  expect(getByTestId("NavLink")).toBeInTheDocument();
  expect(queryByTestId("Div")).toBeNull();

});

test("click NavLink", async () => {
  const user = {
    login: true
  }
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <DoctorListItem
        doctor={doctor}
        user={user}
        setSelectedDoctorData={setSelectedDoctorData}
      />
    </BrowserRouter>,
    {}
  );

  expect(getByTestId("NavLink")).toBeTruthy();
  await act(async () => {
    await fireEvent.click(getByTestId("NavLink"));
  });
  expect(setSelectedDoctorData).toBeCalled();
});
