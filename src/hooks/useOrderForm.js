import { useEffect, useState } from "react";
import { getDateOptionsList, getTimeOptionsList } from "@/utils";
import { useAppContext } from "./useAppContext";

export const useOrderForm = () => {
  const {
    cart,
    receiving,
    setReceiving,
    deliveryAddress,
    setDeliveryAddress,
    deliveryDate,
    setDeliveryDate,
    deliveryTime,
    setDeliveryTime,
    orderComment,
    setOrderComment,
    appConfig,
    menu,
  } = useAppContext();

  const [dateOptions, setDateOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    const dateOptionsList = getDateOptionsList(appConfig);
    const timeOptionsList = getTimeOptionsList(menu, appConfig, dateOptionsList[0], cart);
    setDeliveryDate(dateOptionsList[0]);
    setDeliveryTime(timeOptionsList[0]);
    setDateOptions(dateOptionsList);
    setTimeOptions(dateOptionsList);
  }, []);

  useEffect(() => {
    const timeOptionsList = getTimeOptionsList(menu, appConfig, deliveryDate, cart);
    setTimeOptions(timeOptionsList);
    setDeliveryTime(timeOptionsList[0]);
  }, [deliveryDate]);

  const setReceivingHandler = () => {
    receiving === "pickup" ? setReceiving("delivery") : setReceiving("pickup");
  };

  const setDeliveryAddressHandler = (e) => {
    const requiredValue = appConfig.ORDER_ADDRESS_REQUIRED_VALUE;
    const value = e.target.value;
    if (!value.includes(requiredValue)) {
      setDeliveryAddress(requiredValue);
    } else {
      setDeliveryAddress(value);
    }
  };

  const setOrderCommentHandler = (e) => setOrderComment(e.target.value);

  return {
    dateOptions,
    timeOptions,
    receiving,
    setReceivingHandler,
    deliveryAddress,
    setDeliveryAddressHandler,
    deliveryDate,
    setDeliveryDate,
    deliveryTime,
    setDeliveryTime,
    orderComment,
    setOrderCommentHandler,
    appConfig,
  };
};
