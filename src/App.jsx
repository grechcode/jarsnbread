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
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const hapticAnimation = async () => {
      let count = 0;
      let tg = window.Telegram.WebApp;
      await sleep(1000);
      tg.HapticFeedback.impactOccurred("soft");
      await sleep(300);
      tg.HapticFeedback.impactOccurred("soft");
      await sleep(1500);
      tg.HapticFeedback.impactOccurred("rigid");
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
