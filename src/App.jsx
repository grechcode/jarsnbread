import styles from "./app.module.css";
import { useAppContext, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";

function App() {
  const { currentPage } = useAppContext();

  useTelegram();

  const PAGES = {
    menu: <Menu />,
    cart: <Cart />,
  };

  return <div className={styles.content}>{PAGES[currentPage]}</div>;
}

export default App;
