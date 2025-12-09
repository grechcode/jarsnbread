import styles from "./app.module.css";
import { useAppContext, useTelegram } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { PAGES } from "@/constants";
import { Loading } from "@/components";
import { cn } from "@/utils";

const App = () => {
  const { currentPage, setCurrentPage, isOnstartActionsDone } = useAppContext();

  useTelegram();

  console.log("first");

  return (
    <div className={styles.content}>
      <Loading />
      <div
        className={cn(styles.pagesWrapper, isOnstartActionsDone ? styles.show : "hidden")}
      >
        <button onClick={() => setCurrentPage("cart")}>К корзине</button>
        {currentPage === PAGES.menu && <Menu />}
        {currentPage === PAGES.cart && <Cart />}
      </div>
    </div>
  );
};

export default App;
