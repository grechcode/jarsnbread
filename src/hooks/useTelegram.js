import { useEffect } from "react";
import { useAppContext } from "./useAppContext";
import { calculateCart, isCartEmpty, generateOrderDetailsText } from "@/utils";
import {
  CART_MAIN_BUTTON_TEXT,
  MENU_MAIN_BUTTON_TEXT,
  PAGES,
  PHONE_PERMISSION_ALERT,
  WORK_SHEDULE,
} from "@/constants";

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
    if (hour < WORK_SHEDULE.open || WORK_SHEDULE.close < hour) {
      tg.showAlert(`Режим работы с ${WORK_SHEDULE.open} до ${WORK_SHEDULE.close}`, () => {
        tg.close();
      });
    }
  }, []);

  // handlers and settings for telegram elements
  useEffect(() => {
    const backButtonHandler = () => setCurrentPage(PAGES.menu);

    const menuMainButtonHandler = () => setCurrentPage(PAGES.cart);

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
          tg.showAlert(PHONE_PERMISSION_ALERT);
          tg.HapticFeedback.notificationOccurred("error");
        }
      });
    };

    if (isCartEmpty(cart)) {
      tg.disableClosingConfirmation();
      tg.MainButton.hide();
    } else {
      tg.MainButton.showProgress();
      if (currentPage === PAGES.menu) {
        const finalCartPrice = calculateCart(cart);
        tg.BackButton.hide();
        tg.MainButton.hasShineEffect = false;
        tg.MainButton.setText(`${MENU_MAIN_BUTTON_TEXT}${finalCartPrice} ₽`);
        tg.MainButton.onClick(menuMainButtonHandler);
      }
      if (currentPage === PAGES.cart) {
        tg.BackButton.onClick(backButtonHandler);
        tg.BackButton.show();
        tg.MainButton.hasShineEffect = true;
        tg.MainButton.setText(CART_MAIN_BUTTON_TEXT);
        tg.MainButton.onClick(cartMainButtonHandler);
      }
      tg.MainButton.hideProgress();
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
