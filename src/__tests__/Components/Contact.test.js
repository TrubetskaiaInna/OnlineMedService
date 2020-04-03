import React from "react";
import { render } from "@testing-library/react";
import Contact from "../../components/Contact/Contact";
jest.mock("../../components/GoogleMap/GoogleMap.js", () => () => "GoogleMap");

test("renders learn react link", () => {
  const { getByText } = render(<Contact />);
  const linkElement = getByText(
    /st. Maksyma Zalizniaka, 17/i,
    /Phone 33-22-11/i,
    /OnlaneMedService@ukr.net/i
  );
  expect(linkElement).toBeInTheDocument();
});
