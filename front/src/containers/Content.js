import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// routes config
import routes from "../routes";
import jRoutes from "../views/journalist/routes";
import sRoutes from "../views/source/routes";
import { userAuth, roles } from "../tools";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Content = () => {
  const routesBuilder = () => {
    switch (userAuth.role) {
      case roles.journalist:
        return jRoutes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        });
      case roles.source:
        return sRoutes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        });
      default:
        return routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        });
    }
  };

  return (
    <main className="c-main">
      <Suspense fallback={loading}>
        <Switch>
          {routesBuilder()}
          {<Redirect from="/" to="/home" />}
        </Switch>
      </Suspense>
    </main>
  );
};

export default React.memo(Content);
