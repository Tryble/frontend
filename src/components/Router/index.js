import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Workspace from '../../pages/Workspace';
import Register from '../../pages/Register';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <MainLayout exact path="/" component={Home} />
                <MainLayout path="/workspace" component={Workspace} />
                <AuthLayout path="/login" component={Login} />
                <AuthLayout path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;
