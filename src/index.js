import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux'

import { configureStore } from "./store"

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import HomeLayout from "layouts/Home.jsx"

const store = configureStore()

const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/admin" to="/admin/index/" />
        <Route path="/" render={props => <HomeLayout {...props} />} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
