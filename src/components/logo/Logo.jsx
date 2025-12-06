import styles from "./logo.module.css";

export const Logo = ({ isAnimated = false }) => (
  <div className={styles.logo} data-animated={isAnimated}>
    <div className={styles.cap} />
    <span className={styles.jarText}>БАНОЧКИ</span>
    <span className={styles.jarBottom}>И</span>
    <span className={styles.bread}>ХЛЕБ</span>
  </div>
);
