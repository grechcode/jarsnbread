import styles from "./app.module.css";
import { useAppContext, useLoading, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";

const App = () => {
  const { currentPage } = useAppContext();
  const { isFontsLoaded, isImgsLoaded } = useLoading();

  useTelegram();

  return (
    <div className={styles.content}>
      {isFontsLoaded && <Loading isImgsLoaded={isImgsLoaded} />}

      {isFontsLoaded && currentPage === PAGES.menu && <Menu />}
      {isFontsLoaded && currentPage === PAGES.cart && <Cart />}
    </div>
  );
};

export default App;
