import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import ModalLoading from "./modalLoading";

const openModal = () => {
  const Modal = lazy(() => import("./modalSettings"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de configuraciones"></Modal>
    </Suspense>
  );
};

export const openModalAccount = () => {
  const Modal = lazy(() => import("./modalAccount"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de tu cuenta"></Modal>
    </Suspense>
  );
};

export default openModal;
