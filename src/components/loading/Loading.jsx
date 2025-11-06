import styles from "./loading.module.css";

export const Loading = ({ isFontsLoaded }) => {
  return (
    <div className={styles.loading}>
      {isFontsLoaded && (
        <div className={styles.logo}>
          <div className={styles.cap} />
          <span className={styles.jarText}>БАНОЧКИ</span>
          <span className={styles.jarBottom}>И</span>
          <span className={styles.bread}>ХЛЕБ</span>
        </div>
      )}
    </div>
  );
};
