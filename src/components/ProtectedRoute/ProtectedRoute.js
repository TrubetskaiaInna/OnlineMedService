import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, mainUser: mainUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        mainUser.login ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
