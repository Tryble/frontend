import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/AuthLayout";
import SideBar from "../Layout/Sidebar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout path="/login" component={Login} />
        <AuthLayout path="/" component={SideBar} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
