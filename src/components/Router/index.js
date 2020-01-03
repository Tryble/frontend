import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import TopNavigation from "../Layout/TopNavigation";
import AuthLayout from "../Layout/AuthLayout";
// import MainLayout from '../Layout/AuthLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout path="/login" component={Login} />
        <AuthLayout path="/" component={TopNavigation} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
