import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import "./assets/style/main.scss";
import HomePage from "./views/home";
import Layout from "./containers/Layout";

const loading = <div>Loading ...</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <PublicRoute
              restricted={true}
              exact
              path="/login"
              name="Login Page"
              component={(props) => <HomePage {...props} />}
            />
            {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
            {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
            <PrivateRoute
              path="/"
              component={(props) => <Layout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
