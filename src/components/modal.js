import { useRef } from "react";
import styles from "./modal.module.scss";

const Modal = ({ children, title, root }) => {
  const ref = useRef(null);

  function callback(e) {
    root.unmount();
    document.querySelector("#modal").remove();
    ref.current.addEventListener("animationend", callback);
  }

  function handleClose() {
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener("animationend", callback, { once: true });
  }
  return (
    <div className={styles.modalContainer} ref={ref}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>{title}</div>
          <div>
            <button onClick={handleClose}>X</button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
