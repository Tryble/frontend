import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <MainLayout exact path="/" component={Home} />
                <AuthLayout path="/login" component={Login} />
                <AuthLayout path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;