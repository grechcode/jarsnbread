import styles from "./app.module.css";
import { useAppContext, useLoading, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";
import { useEffect } from "react";

const App = () => {
  const { currentPage } = useAppContext();
  const { isFontsLoaded, isImgsLoaded } = useLoading();

  useTelegram();

  useEffect(() => {
    if (isFontsLoaded) {
      let tg = window.Telegram.WebApp;
      tg.HapticFeedback.impactOccurred("heavy");
      const timeout = setTimeout(() => {
        tg.HapticFeedback.selectionChanged();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isFontsLoaded]);

  return (
    <div className={styles.content}>
      <Loading isImgsLoaded={isImgsLoaded} isFontsLoaded={isFontsLoaded} />

      {isFontsLoaded && currentPage === PAGES.menu && <Menu />}
      {isFontsLoaded && currentPage === PAGES.cart && <Cart />}
    </div>
  );
};

export default App;
