import React from "react";
import Time from "../../components/Time/Time";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import * as some from "../../utils/TimeUtils";
import { BrowserRouter } from "react-router-dom";
import { act, fireEvent } from "@testing-library/react";
import { apiService } from "../../service/apiService";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
jest.mock("../../components/TimeButton/TimeButton", () => () => "TimeButton");
some.calculationWeekend = jest.fn(() => {
  return ["Sunday", "Friday"];
});
some.calculationDay = jest.fn(() => {
  return "Monday";
});
const clearSelectedData = jest.fn();
const clearScheduleDoctor = jest.fn();
apiService.createAppointment = jest.fn();
const schedule = [
  {
    day: "Saturday",
    doctor: 3,
    enabled: true,
    endTime: "10:30",
    id: 127,
    startTime: "10:00"
  }
];
const selectedData = "Sunday";

test("renders wrapperTime", () => {
  const { getByTestId } = renderWithRedux(
    <Time
      schedule={schedule}
      clearSelectedData={clearSelectedData}
      clearScheduleDoctor={clearScheduleDoctor}
    />,
    {}
  );
  expect(getByTestId("wrapperTime")).toBeInTheDocument();
});

test("click Confirm", async () => {
  const { getByTestId } = renderWithRedux(
    <BrowserRouter>
      <Time
        schedule={schedule}
        clearSelectedData={clearSelectedData}
        clearScheduleDoctor={clearScheduleDoctor}
        selectedData={selectedData}
        history={history}
      />
    </BrowserRouter>,
    {}
  );

  expect(getByTestId("SignInTestId")).toBeTruthy();
  await act(async () => {
    await fireEvent.click(getByTestId("SignInTestId"));
  });
  expect(apiService.createAppointment).toBeCalled();
});
