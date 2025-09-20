import { useAppContext } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { isCartEmpty } from "@/utils";
import { useEffect } from "react";

function App() {
  const { currentPage, setCurrentPage, cart } = useAppContext();

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes();
    const date = new Date();
    const hour = date.getHours();
    // if (9 >= hour >= 21) {
    //   tg.showAlert("Уже поздно, доставка не работает!", () => {
    //     tg.close();
    //   });
    // }
  }, []);

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    if (isCartEmpty(cart)) {
      tg.MainButton.hide();
    } else {
      if (currentPage === "menu") {
        tg.MainButton.setText("К корзине");
        tg.MainButton.onClick(() => {
          setCurrentPage("cart");
        });
      } else {
        tg.MainButton.setText("Вернуться в меню");
        tg.MainButton.onClick(() => {
          setCurrentPage("menu");
        });
      }
      tg.MainButton.show();
    }
  }, [cart, currentPage]);

  const PAGES = {
    menu: <Menu />,
    cart: <Cart />,
  };

  return <div>{PAGES[currentPage]}</div>;
}

export default App;
