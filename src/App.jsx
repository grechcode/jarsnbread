import styles from "./app.module.css";
import { useAppContext, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";

function App() {
  const { currentPage } = useAppContext();

  useTelegram();

  return (
    <div className={styles.content}>
      {currentPage === PAGES.menu && <Menu />}
      {currentPage === PAGES.cart && <Cart />}
    </div>
  );
}

export default App;
