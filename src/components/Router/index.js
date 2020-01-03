import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "../../pages/Login";
import TopNavigation from "../Layout/TopNavigation";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import SideBar from "../Layout/Sidebar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout path="/login" component={Login} />
        <MainLayout path="/" component={TopNavigation} />
        <MainLayout path="/" component={SideBar} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
