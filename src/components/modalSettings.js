import React from "react";
import Modal from "./modal";

const ModalSettings = ({ title, root }) => {
  return (
    <Modal title={title} root={root}>
      Modal de configuración
    </Modal>
  );
};

export default ModalSettings;
