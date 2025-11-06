import styles from "./app.module.css";
import { useAppContext, useLoading, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";
import { useEffect } from "react";
import { cn } from "@/utils";

const App = () => {
  const { currentPage } = useAppContext();
  const isImgsLoaded = useLoading();

  useTelegram();

  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const hapticAnimation = async () => {
      let tg = window.Telegram.WebApp;
      await sleep(1000);
      tg.HapticFeedback.impactOccurred("soft");
      await sleep(300);
      tg.HapticFeedback.impactOccurred("soft");
      await sleep(1500);
      tg.HapticFeedback.impactOccurred("soft");
    };
    hapticAnimation();
  }, []);

  return (
    <div className={styles.content}>
      <Loading />
      <div className={cn(styles.pagesWrapper, isImgsLoaded ? styles.show : "hidden")}>
        {currentPage === PAGES.menu && <Menu />}
        {currentPage === PAGES.cart && <Cart />}
      </div>
    </div>
  );
};

export default App;
