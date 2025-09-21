import { useAppContext } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { calculateCart, isCartEmpty } from "@/utils";
import { useEffect } from "react";

function App() {
  const { currentPage, setCurrentPage, cart } = useAppContext();

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes();
    tg.enableClosingConfirmation();
    tg.MainButton.color = "#b792ff";
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
        tg.BackButton.hide();
        let finalCartPrice = calculateCart(cart);
        tg.MainButton.hasShineEffect = false;
        tg.MainButton.setText(`К корзине • ${finalCartPrice} ₽`);
        tg.MainButton.offClick(() => {
          tg.showAlert("Заказ создан!");
        });
        tg.MainButton.onClick(() => {
          setCurrentPage("cart");
        });
      } else {
        tg.BackButton.onClick(() => {
          tg.MainButton.offClick(() => {
            tg.showAlert("Заказ создан!");
          });
          tg.MainButton.onClick(() => {
            setCurrentPage("cart");
          });
          setCurrentPage("menu");
        });
        tg.BackButton.show();
        tg.MainButton.hasShineEffect = true;
        tg.MainButton.setText("Создать заказ");
        tg.MainButton.offClick(() => {
          setCurrentPage("cart");
        });
        tg.MainButton.onClick(() => {
          tg.showAlert("Заказ создан!");
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
