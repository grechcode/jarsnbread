import { cn } from "@/utils";
import styles from "./loading.module.css";

export const Loading = ({ contentLoaded, progressPercent }) => (
  <div className={cn(styles.loading, contentLoaded && styles.hide)}>
    <div className={styles.progressBar} style={{ "--progress": progressPercent }} />
    <div className={styles.loadingTitle}>
      <span>jars</span>
      <span className={styles.accent}>&</span>
      <span>bread</span>
    </div>
  </div>
);
