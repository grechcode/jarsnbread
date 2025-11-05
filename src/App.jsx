import styles from "./app.module.css";
import { useAppContext, useLoading, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";

const App = () => {
  const { currentPage } = useAppContext();
  const { contentLoaded, progressPercent } = useLoading();

  useTelegram();

  return (
    <div className={styles.content}>
      <Loading contentLoaded={contentLoaded} progressPercent={progressPercent} />
      {/* {currentPage === PAGES.menu && <Menu />}
      {currentPage === PAGES.cart && <Cart />} */}
    </div>
  );
};

export default App;
