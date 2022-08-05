import styles from "./modal.module.scss";

const ModalLoading = () => {
  return (
    <div className={styles.loadingView}>
      <div className={styles.loadingContainer}>Loading...</div>
    </div>
  );
};

export default ModalLoading;
