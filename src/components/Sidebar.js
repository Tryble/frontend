import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Typography } from "antd";
import AddTribesModal from "./AddTribesModal";



export default function SideBar() {

  const [showModal, setShowModal] = useState(false);

  const { Title } = Typography;

  const handleOk = e => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleCancel = e => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      <StyledSideNav>
        <div className="title-bar">
          <Title level={3}>Tribes</Title>
          <button onClick={() => setShowModal(true)}>
            <Icon type="plus" />
          </button>
        </div>
      </StyledSideNav>
      <AddTribesModal
        show={showModal}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </>
  );
}

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
      background: #52446e
      padding: .25rem;
      height: 20px;
      display: flex;
    }
  }
`;