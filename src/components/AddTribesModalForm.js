import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { Icon } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";

export function AddTribesModalForm(props) {
  const initialAddTribeForm = {
    tribeName: "",
    imagesUrl:
      "https://i.pinimg.com/236x/d0/85/5d/d0855d1ef628012eeeeaf8b4a7eb701e.jpg"
  };

  const [newTribe, setNewTribe] = useState(initialAddTribeForm);

  const handleChange = e => {
    setNewTribe({
      ...newTribe,
      tribeName: e.target.value
    });
    console.log(newTribe);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://tryble.herokuapp.com/api/tribes", newTribe)
      .then(res => {
        console.log(res);
      })
      .catch(err => {});
  };
  return (
    <div>
      <form>
        <Modal
          visible={props.show}
          onOk={handleSubmit}
          onCancel={props.onCancel}
          footer={[
            <Button
              key="back"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#392959",
                color: "white",
                fontFamily: "ABeeZee"
              }}
            >
              CREATE TRIBES <Icon type="check" />
            </Button>,
            <Button
              key="submit"
              onClick={props.onCancel}
              style={{
                backgroundColor: "ffff",
                color: "#392959",
                fontFamily: "ABeeZee"
              }}
            >
              CANCEL <Icon type="close" />
            </Button>
          ]}
        >
          <WrapDiv>
            <div>
              <p style={{ fontWeight: "bold" }}> What are tribes ? </p>
              <p>
                Tribes are like your very own maker community. Together with
                your tribe, you can work on projectsand build a valuable
                connections to last a lifetime.
              </p>
              <p>Chose your tribe wisely!</p>
              To createa tribe, just add a name and an emblem
              <br></br>
              <h4 style={{ fontWeight: "bold" }}>Tribe Name </h4> ( Let your
              creative juices flow, fun names are allowed )
              <StyledInput
                name="tribeName"
                onChange={handleChange}
                placeholder=" Enter a name... "
                value={newTribe.tribeName}
              ></StyledInput>
            </div>
            <div>
              <StyledAddEmblemSign>
                <Icon type="plus" />
              </StyledAddEmblemSign>
              <p style={{ fontWeight: "bold" }}>AddEmblem</p>
            </div>
          </WrapDiv>
        </Modal>
      </form>
    </div>
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
)(AddTribesModalForm);

const StyledInput = styled.input`
  padding-left: 3em;
  border-radius: 0.3em;
  border: none;
  background-color: #f9f7ff;
  height: 30px;
  width: 400px;
  color: #6d6d6d;
`;

const StyledAddEmblemSign = styled.button`
  border: none;
  outline: none;
  background: #f9f7ff;
  padding: 0.75rem;
  height: 80px;
  width: 80px;
`;

const WrapDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
