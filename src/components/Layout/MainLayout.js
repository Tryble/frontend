import React from 'react';
import PrivateRoute from '../Router/PrivateRoute';


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <PrivateRoute {...rest} component={matchProps => (
      <div>
        
        <Component {...matchProps} />
      </div>
    )}/>
  )
};


export default MainLayout;