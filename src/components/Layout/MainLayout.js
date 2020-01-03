import React from 'react';
import styled from 'styled-components';
import PrivateRoute from '../Router/PrivateRoute';
import Sidebar from '../Sidebar';
import TopNavigation from '../TopNavigation';


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <PrivateRoute {...rest} component={matchProps => (
      <StyledContainer>
        <TopNavigation />
        <div className="main-content">
          <Sidebar />
          <div className="content-wrap">
            <Component {...matchProps} />
          </div>
        </div>
      </StyledContainer>
    )}/>
  )
};


export default MainLayout;

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .main-content {
    display: flex;
    flex: auto;

    & > div {
      height: 100%;
    }
  }

  .sidebar {
    max-width: 250px;
    width: 100%;
  }

  .content-wrap {
    padding: 2rem;
    background: #f9f7ff;
    flex: auto;
  }
`