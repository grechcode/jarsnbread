import { cn } from "@/utils";
import styles from "./loading.module.css";

export const Loading = ({ contentLoaded }) => (
  <div className={cn(styles.loading, contentLoaded && styles.hide)}>
    <div className={styles.logo}>
      <div className={styles.cap} />
      <span className={styles.jarText}>БАНОЧКИ</span>
      <span className={styles.jarBottom}>И</span>
      <span className={styles.bread}>ХЛЕБ</span>
    </div>
  </div>
);
