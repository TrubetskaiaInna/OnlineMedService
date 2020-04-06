import React from "react";
import DoctorList from "../../components/DoctorList/DoctorList";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import { apiService } from "../../service/apiService";
jest.mock("../../components/Spinner/Spinner.js", () => () => "Spinner");
jest.mock("../../components/DoctorListItem/DoctorListItem.js", () => () =>
  "DoctorListItem"
);
let doctors = [];
const showLoading = jest.fn();
const hideLoading = jest.fn();
const clearDoctorData = jest.fn();
apiService.getDoctors = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = {
        data: {
          doctors: [
            {
              fullName: "John Smith",
              id: 1,
              info: "Info",
              photo: "111",
              type: "Surgeon"
            },
            {
              fullName: "Hugh Brown",
              id: 2,
              info: "Info2",
              photo: "222",
              type: "Dentist"
            }
          ]
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
    <DoctorList
      action={action}
      doctors={doctors}
      showLoading={showLoading}
      clearDoctorData={clearDoctorData}
    />,
    {}
  );
  expect(getByText(/Spinner/i)).toBeInTheDocument();
});

test("render wrapperItemCard", () => {
  const action = false;

  let setDoctorData = jest.fn(() => {
    return (doctors = [
      {
        fullName: "John Smith",
        id: 1,
        info: "Info",
        photo: "111",
        type: "Surgeon"
      },
      {
        fullName: "Hugh Brown",
        id: 2,
        info: "Info2",
        photo: "222",
        type: "Dentist"
      }
    ]);
  });
  const { getByTestId } = renderWithRedux(
    <DoctorList
      action={action}
      doctors={doctors}
      showLoading={showLoading}
      hideLoading={hideLoading}
      clearDoctorData={clearDoctorData}
    />,
    {}
  );

  const updateProps = props => renderWithRedux(<DoctorList {...props} />, {});
  updateProps({
    doctors: setDoctorData(),
    showLoading: showLoading,
    clearDoctorData: clearDoctorData
  });

  expect(getByTestId("1")).toBeInTheDocument();
  expect(getByTestId("2")).toBeInTheDocument();
});
