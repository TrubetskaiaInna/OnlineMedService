import React from "react";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import TimeButton from "../../components/TimeButton/TimeButton";
import { act, fireEvent } from "@testing-library/react";
import * as some from "../../utils/TimeUtils";
const element = {
  startTime: "10:00",
  endTime: "10:30",
  enabled: true
};
some.calculationDate = jest.fn(() => {
  return "Tue Apr 07 2020 18:15:00 GMT+0300 (Eastern European Summer Time)";
});
const setSelectedData = jest.fn();

test("render Button", () => {
  const { getByTestId } = renderWithRedux(<TimeButton element={element} />, {});
  expect(getByTestId("SignInTestId")).toBeInTheDocument();
});

test("click Button", async () => {
  const { getByTestId } = renderWithRedux(
    <TimeButton element={element} setSelectedData={setSelectedData} />,
    {}
  );

  expect(getByTestId("SignInTestId")).toBeTruthy();
  await act(async () => {
    await fireEvent.click(getByTestId("SignInTestId"));
  });
  expect(setSelectedData).toBeCalled();
});
