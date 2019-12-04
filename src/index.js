import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/admin/index" render={props => <AdminLayout {...props} />} />
      <Route path="/auth/login" render={props => <AuthLayout {...props} />} />
      <Route path="/auth/register" render={props => <AuthLayout {...props} />} />
      <Route path="/admin/user-profile" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
