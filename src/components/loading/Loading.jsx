import { cn } from "@/utils";
import styles from "./loading.module.css";
import { memo, useEffect } from "react";

export const Loading = ({ isImgsLoaded, isFontsLoaded }) => {
  const Logo = memo(() => {
    useEffect(() => {
      let tg = window.Telegram.WebApp;
      tg.HapticFeedback.impactOccurred("light");
      const timeout = setTimeout(() => {
        tg.HapticFeedback.selectionChanged();
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <div className={styles.logo}>
        <div className={styles.cap} />
        <span className={styles.jarText}>БАНОЧКИ</span>
        <span className={styles.jarBottom}>И</span>
        <span className={styles.bread}>ХЛЕБ</span>
      </div>
    );
  });

  return (
    // <div className={cn(styles.loading, isImgsLoaded && styles.hide)}>
    //   {isFontsLoaded && <Logo />}
    // </div>
    <div className={styles.loading}>{isFontsLoaded && <Logo />}</div>
  );
};
