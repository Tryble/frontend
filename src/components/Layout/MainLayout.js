import React from 'react';
import PrivateRoute from '../Router/PrivateRoute';
import TopNavigation from '../TopNavigation';


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <PrivateRoute {...rest} component={matchProps => (
      <div>
        <TopNavigation />
        <Component {...matchProps} />
      </div>
    )}/>
  )
};


export default MainLayout;