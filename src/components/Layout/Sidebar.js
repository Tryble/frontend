import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "antd";
import AddTribesModal from "./AddTribesModal";

const StyledSideNav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 180px;
  z-index: 1;
  top: 3.4em;
  background-color: #392959;
  font-family: "ABeeZee";
  color: white;
  overflow-x: hidden;
  padding-top: 10px;
`;

export default function SideBar(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOk = e => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleCancel = e => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <StyledSideNav>
        TRIBES
        <div>
          <Icon type="plus-square" onClick={() => setShowModal(true)} />
        </div>
      </StyledSideNav>
      <AddTribesModal
        show={showModal}
        onCancel={handleCancel}
        onOk={handleOk}
      />
    </div>
  );
}
