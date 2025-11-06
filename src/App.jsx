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
    const hapticAnimation = () => {
      let tg = window.Telegram.WebApp;
      setTimeout(() => {
        tg.HapticFeedback.selectionChanged();
      }, 1000);
      setTimeout(() => {
        tg.HapticFeedback.selectionChanged();
      }, 1300);
      setTimeout(() => {
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("light");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("medium");
        tg.HapticFeedback.impactOccurred("heavy");
        tg.HapticFeedback.impactOccurred("heavy");
        tg.HapticFeedback.impactOccurred("heavy");
        tg.HapticFeedback.impactOccurred("heavy");
        tg.HapticFeedback.impactOccurred("heavy");
        tg.HapticFeedback.impactOccurred("heavy");
      }, 1400);
      setTimeout(() => {
        tg.HapticFeedback.selectionChanged();
      }, 3000);
    };

    if (isFontsLoaded) {
      hapticAnimation();
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
