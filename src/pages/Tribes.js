import React from "react";
import styled from "styled-components";

const Tribes = props => {
  return (
    <WrapDiv>
      {props.tribesArr &&
        props.tribesArr.map(tribe => <div key={tribe.id}>{tribe.name}</div>)}
    </WrapDiv>
  );
};

export default Tribes;

const WrapDiv = styled.div`
  margin-top: 60px;
  margin-left: 120px;
  border-radius: 10%;
  color: #ffff;
  font-family: ABeeZee;
`;
