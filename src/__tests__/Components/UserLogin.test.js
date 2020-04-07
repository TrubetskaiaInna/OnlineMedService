import React from "react";
import UserLogin from "../../components/UserLogin/UserLogin";
import renderWithRedux from "../../__mocks__/renderWihtRedux";
import { act, fireEvent } from "@testing-library/react";
import { apiService } from "../../service/apiService";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
jest.mock("../../components/Spinner/Spinner", () => () => "Spinner");
jest.mock("../../components/Message/Message", () => () => "Message");
const showLoading = jest.fn();
const hideLoading = jest.fn();
const setUserData = jest.fn();
const setToken = jest.fn();
apiService.login = jest.fn(() => {
  return new Promise(resolve => {
    resolve({});
  })
    .then(response => {
      return (response = {
        data: {
          apiToken: "123"
        }
      });
    })
    .catch(err => {
      console.log("err", err);
    });
});

test("renders learn react link", () => {
  const { getByText } = renderWithRedux(<UserLogin />, {});
  expect(getByText(/Access to your personal account/i)).toBeInTheDocument();
});

test("render spinner", async () => {
  const action = true;
  const { getByText } = renderWithRedux(
    <UserLogin showLoading={showLoading} action={action} />,
    {}
  );
  expect(getByText(/Spinner/i)).toBeInTheDocument();
});

test("click Button", async () => {
  const action = false;
  const { getByTestId } = renderWithRedux(
    <UserLogin
      showLoading={showLoading}
      action={action}
      hideLoading={hideLoading}
      setToken={setToken}
      setUserData={setUserData}
      history={history}
    />,
    {}
  );

  expect(getByTestId("SignInTestId")).toBeTruthy();
  await act(async () => {
    await fireEvent.submit(getByTestId("SignInTestId"));
  });
  expect(apiService.login).toBeCalled();
});

test("change input with invalid data", async () => {
  const action = false;

  const { container, getByText, queryByTestId } = renderWithRedux(
    <UserLogin
      showLoading={showLoading}
      action={action}
      hideLoading={hideLoading}
      setToken={setToken}
      setUserData={setUserData}
      history={history}
    />,
    {}
  );
  expect(
    queryByTestId(
      "userName can only contain number, letter, dash, underscore, and dot"
    )
  ).toBeNull();
  const name = container.querySelector('input[name="userNameLog"]');
  fireEvent.change(name, {
    target: {
      value: "&&**"
    }
  });
  expect(
    getByText(
      /userName can only contain number, letter, dash, underscore, and dot/i
    )
  ).toBeInTheDocument();
});

test("change input with valid data", async () => {
  const action = false;

  const { container, queryByTestId } = renderWithRedux(
    <UserLogin
      showLoading={showLoading}
      action={action}
      hideLoading={hideLoading}
      setToken={setToken}
      setUserData={setUserData}
      history={history}
    />,
    {}
  );
  expect(
    queryByTestId(
      "password must contain at least 10 characters (letters or number)"
    )
  ).toBeNull();
  const name = container.querySelector('input[name="passwordLog"]');
  fireEvent.change(name, {
    target: {
      value: "1111111111"
    }
  });
  expect(
    queryByTestId(
      "password must contain at least 10 characters (letters or number)"
    )
  ).toBeNull();
});
