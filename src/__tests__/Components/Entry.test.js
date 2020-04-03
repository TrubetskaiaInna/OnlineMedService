import React from "react";
import Entry from "../../components/Entry/Entry";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
jest.mock("../../components/Data/DataContainer.js", () => () => "Data");

test("renders learn react link", () => {
  let selectedDoctors = {
    photo: "123",
    fullName: "Ivan",
    type: "Surgeon",
    info: "info"
  };
  const { getByText } = renderWithRedux(
    <Entry selectedDoctors={selectedDoctors} />,
    {}
  );
  const linkElement = getByText(/Ivan/i, /Surgeon/i);
  expect(linkElement).toBeInTheDocument();
});
