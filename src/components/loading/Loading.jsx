import { cn } from "@/utils";
import styles from "./loading.module.css";

export const Loading = ({ contentLoaded, progressPercent }) => (
  <div className={styles.loading}>
    <div className={styles.logo}>
      <div className={styles.cap} />
      <span className={styles.jarText} data-text="БАНОЧКИ">
        БАНОЧКИ
      </span>
      <span className={styles.jarBottom}>И</span>
      <div className={styles.bread}>
        <span className={styles.breadText}>ХЛЕБ</span>
      </div>
    </div>
  </div>
);
