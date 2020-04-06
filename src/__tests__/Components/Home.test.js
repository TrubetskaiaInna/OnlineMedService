import React from "react";
import { render } from "@testing-library/react";
import Home from "../../components/Home/Home";
import { BrowserRouter } from "react-router-dom";

test("render NavLink Login", () => {
  const mainUser = {
    login: false
  };
  const { getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <Home mainUser={mainUser} />
    </BrowserRouter>
  );
  expect(getByTestId("Login")).toBeInTheDocument();
  expect(queryByTestId("NavLink")).toBeNull();
});

test("render NavLink Personal account", () => {
  const mainUser = {
    login: true
  };
  const { getByTestId, queryByTestId } = render(
    <BrowserRouter>
      <Home mainUser={mainUser} />
    </BrowserRouter>
  );
  expect(getByTestId("Personal")).toBeInTheDocument();
  expect(queryByTestId("Login")).toBeNull();
});
