import React from 'react';
import { Route } from 'react-router-dom';

const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div>
        
        <Component {...props} />
      </div>
    )}/>
  )
}


export default AuthLayout;