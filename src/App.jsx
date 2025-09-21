import { useAppContext } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { calculateCart, isCartEmpty } from "@/utils";
import { useEffect } from "react";

function App() {
  const { currentPage, setCurrentPage, cart } = useAppContext();

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes();
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
    const menuMainButtonHandler = () => {
      setCurrentPage("cart");
    };
    const cartMainButtonHandler = () => {
      tg.showAlert("Заказ создан!");
      tg.HapticFeedback.notificationOccurred("success");
    };

    if (isCartEmpty(cart)) {
      tg.disableClosingConfirmation();
      tg.MainButton.hide();
    } else {
      tg.enableClosingConfirmation();
      if (currentPage === "menu") {
        tg.BackButton.hide();
        let finalCartPrice = calculateCart(cart);
        tg.MainButton.hasShineEffect = false;
        tg.MainButton.setText(`К корзине • ${finalCartPrice} ₽`);
        tg.MainButton.offClick(cartMainButtonHandler);
        tg.MainButton.onClick(menuMainButtonHandler);
      } else {
        tg.BackButton.onClick(() => {
          setCurrentPage("menu");
          tg.MainButton.offClick(cartMainButtonHandler);
          tg.MainButton.onClick(menuMainButtonHandler);
        });
        tg.BackButton.show();
        tg.MainButton.hasShineEffect = true;
        tg.MainButton.setText("Создать заказ");
        tg.MainButton.offClick(menuMainButtonHandler);
        tg.MainButton.onClick(cartMainButtonHandler);
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
