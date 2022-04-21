// react redux
import React from "react";
import { useSelector } from "../../services/hooks";
import { Redirect, Route, RouteProps } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
 const { token } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token?.refresh ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/pre-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
