import { useAppContext } from "./useAppContext";
import { calculateCart, isCartEmpty, generateOrderDetailsText } from "@/utils";
import { useEffect } from "react";

export const useTelegram = () => {
  const {
    currentPage,
    setCurrentPage,
    cart,
    receiving,
    deliveryAddress,
    deliveryDate,
    deliveryTime,
    orderComment,
  } = useAppContext();

  let tg = window.Telegram.WebApp;

  // telegram settings for app on start
  useEffect(() => {
    tg.disableVerticalSwipes();
    tg.expand();
    tg.MainButton.color = "#b792ff";
    const date = new Date();
    const hour = date.getHours();
    // if (hour < 9 || 21 < hour) {
    //   tg.showAlert("Режим работы с 9:00 до 21:00", () => {
    //     tg.close();
    //   });
    // }
  }, []);

  // handlers and settings for telegram elements
  useEffect(() => {
    const backButtonHandler = () => setCurrentPage("menu");

    const menuMainButtonHandler = () => setCurrentPage("cart");

    const cartMainButtonHandler = () => {
      tg.requestContact((phonePermission, contactData) => {
        let detailText = generateOrderDetailsText({
          cart,
          receiving,
          deliveryAddress,
          deliveryDate,
          deliveryTime,
          orderComment,
        });
        let info = {
          contact: contactData,
          detailText: detailText,
          detail: {
            cart,
            receiving,
            deliveryAddress,
            deliveryDate,
            deliveryTime,
            orderComment,
          },
        };
        if (phonePermission) {
          tg.sendData(JSON.stringify(info));
          tg.HapticFeedback.notificationOccurred("success");
          tg.close();
        } else {
          tg.showAlert(
            "Чтобы создать заказ, необходимо поделиться номером телефона!\nЭто нужно, чтобы менеджер мог связаться с вами!"
          );
          tg.HapticFeedback.notificationOccurred("error");
        }
      });
    };

    if (isCartEmpty(cart)) {
      tg.disableClosingConfirmation();
      tg.MainButton.hide();
    } else {
      if (currentPage === "menu") {
        const finalCartPrice = calculateCart(cart);
        tg.BackButton.hide();
        tg.MainButton.hasShineEffect = false;
        tg.MainButton.setText(`К корзине • ${finalCartPrice} ₽`);
        tg.MainButton.onClick(menuMainButtonHandler);
      } else {
        tg.BackButton.onClick(backButtonHandler);
        tg.BackButton.show();
        tg.MainButton.hasShineEffect = true;
        tg.MainButton.setText(`Создать заказ`);
        tg.MainButton.onClick(cartMainButtonHandler);
      }
      tg.enableClosingConfirmation();
      tg.MainButton.show();
    }
    return () => {
      tg.BackButton.offClick(backButtonHandler);
      tg.MainButton.offClick(menuMainButtonHandler);
      tg.MainButton.offClick(cartMainButtonHandler);
    };
  }, [
    cart,
    currentPage,
    receiving,
    deliveryAddress,
    deliveryDate,
    deliveryTime,
    orderComment,
  ]);
};
