import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Typography } from "antd";
import { connect } from "react-redux";
// import * as actionCreators from "../store/ActionCreators";
import AddTribesModalForm from "./AddTribesModalForm";

const initialState = {
  showModal: false,
  loading: false
};

export function SideBar() {
  const [modalState, setModalState] = useState(initialState);

  const { Title } = Typography;

  const handleOk = e => {
    e.preventDefault();
    setModalState({ loading: true });
    setTimeout(() => {
      setModalState({ showModal: false, loading: false });
    }, 3000);
  };

  const handleCancel = e => {
    e.preventDefault();
    setModalState({ showModal: false });
  };

  return (
    <>
      <StyledSideNav>
        <div className="title-bar">
          <Title level={3}>Tribes</Title>
          <button onClick={() => setModalState({ showModal: true })}>
            <Icon type="plus" />
          </button>
        </div>
      </StyledSideNav>
      <AddTribesModalForm
        show={modalState.showModal}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </>
  );
}
const mapStateToProps = state => {
  return {
    tribes: state.appState
  };
};

export default connect(
  mapStateToProps
  // actionCreators
)(SideBar);

const StyledSideNav = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #392959;

  .anticon-plus {
    color: #fff;
    font-size: 1.2rem;
  }

  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
    }

    button {
      border: none;
      outline: none;
      background: #52446e;
      padding: 0.25rem;
      height: 20px;
      display: flex;
    }
  }
`;
