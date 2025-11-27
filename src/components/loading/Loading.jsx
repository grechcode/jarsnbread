import { useLoading } from "@/hooks";
import styles from "./loading.module.css";
import { useEffect } from "react";

export const Loading = () => {
  const { hapticAnimation } = useLoading();

  useEffect(() => {
    hapticAnimation();
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.logo}>
        <div className={styles.cap} />
        <span className={styles.jarText}>БАНОЧКИ</span>
        <span className={styles.jarBottom}>И</span>
        <span className={styles.bread}>ХЛЕБ</span>
      </div>
    </div>
  );
};
