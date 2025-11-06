import styles from "./app.module.css";
import { useAppContext, useLoading, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";
import { useEffect } from "react";
import { cn } from "@/utils";

const App = () => {
  const { currentPage } = useAppContext();
  const { isImgsLoaded, hapticAnimation } = useLoading();

  useTelegram();

  useEffect(() => {
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
