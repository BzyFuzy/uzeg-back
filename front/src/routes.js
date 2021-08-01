import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userAuth } from "./tools";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userAuth.isAuthenticated && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userAuth.isAuthenticated ? (
        <Component {...props} logOut={rest.logOut} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const Bla = () => {
  return <div>Bla</div>;
};
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Bla },
];

export default routes;
