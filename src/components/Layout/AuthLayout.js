import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';


const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <StyledContainer>
        <div>
          <Component {...props} />
        </div>
      </StyledContainer>
    )}/>
  )
}


export default AuthLayout;

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000531;

  & > div {
    max-width: 500px;
    width: 100%;
    color: #fff;

    h3 {
      text-align: center;
      margin-bottom: 0;
      color: #fff;
    }

    a {
      text-align: center;
      display: block;
      text-decoration: underline;
      color: #fff;
      font-size: 1.25rem;
    }

    form {
      margin: 3.5rem 0 2.5rem;

      .ant-form-item {
        margin-bottom: 3rem;
      }

      .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
        border: 1px solid #26BF2B;
      }

      .ant-input-password-icon {
        color: #fff
      }
    
      .has-error .ant-input,
      .has-error .ant-input-affix-wrapper .ant-input, 
      .has-error .ant-input, .has-error .ant-input:hover,
      .has-error .ant-input-affix-wrapper .ant-input:hover {
        background: transparent;
      }

      input,
      button {
        height: 40px;
      }

      input {
        border: 1px solid #fff;
        color: #fff;
        background: transparent;

        &::placeholder {
          color: #fff;
        }

        &:hover {
          border: 1px solid #26BF2B;
        }
      }

      button {
        margin-top: 2rem;
        text-transform: uppercase;
        background: #26BF2B;
        color: #fff;
        border: 1px solid #26BF2B;

        &:hover {
          opacity: .7;
          background: #26BF2B;
        }
      }
    }
  }
`