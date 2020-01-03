import React from "react";
import { Modal } from "antd";


export default function AddTribesModal(props) {
  return (
    <div>
      <Modal visible={props.show} onOk={props.onOk} onCancel={props.onCancel}>
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
