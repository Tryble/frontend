import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { Icon } from "antd";

export default function AddTribesModal(props) {
  return (
    <div>
      <Modal
        visible={props.show}
        onOk={props.onOk}
        onCancel={props.onCancel}
        footer={[
          <Button key="back" onClick={props.onCancel}>
            CREATE TRIBES <Icon type="check" />
          </Button>,
          <Button
            key="submit"
            type="primary"
            // loading={loading}
            onClick={props.onOk}
          >
            CANCEL <Icon type="close" />
          </Button>
        ]}
      >
        <p> What are tribes ? </p>
        <p>
          Tribes are like your very own maker community. Together with your
          tribe, you can work on projectsand build a valuable connections to
          last a lifetime.
        </p>
        <p>Chose your tribe wisely!</p>
        To createa tribe, just add a name andan emblem
      </Modal>
    </div>
  );
}
