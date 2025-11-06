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
      {!isImgsLoaded && (
        <Loading isImgsLoaded={isImgsLoaded} isFontsLoaded={isFontsLoaded} />
      )}

      {currentPage === PAGES.menu && <Menu />}
      {currentPage === PAGES.cart && <Cart />}
    </div>
  );
};

export default App;
