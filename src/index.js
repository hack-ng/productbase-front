import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from "./store"

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/argon-dashboard-react.min.css";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import HomeLayout from "layouts/Home.jsx"

import Loader from "./components/Loader"


const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />} >
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/admin" to="/admin/index/" />
        <Route path="/" render={props => <HomeLayout {...props} />} />
      </Switch>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
