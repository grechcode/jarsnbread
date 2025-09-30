import { useEffect, useState } from "react";
import { getDateOptionsList, getTimeOptionsList } from "@/utils";
import { useAppContext } from "./useAppContext";
import { ORDER_ADDRESS_REQUIRED_VALUE } from "@/constants";

export const useOrderForm = () => {
  const {
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
  } = useAppContext();

  const [dateOptions, setDateOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    const dateOptionsList = getDateOptionsList();
    const timeOptionsList = getTimeOptionsList(dateOptionsList[0]);
    setDeliveryDate(dateOptionsList[0]);
    setDeliveryTime(timeOptionsList[0]);
    setDateOptions(dateOptionsList);
    setTimeOptions(dateOptionsList);
  }, []);

  useEffect(() => {
    const timeOptionsList = getTimeOptionsList(deliveryDate);
    setTimeOptions(timeOptionsList);
    setDeliveryTime(timeOptionsList[0]);
  }, [deliveryDate]);

  const setReceivingHandler = () => {
    receiving === "pickup" ? setReceiving("delivery") : setReceiving("pickup");
  };

  const setDeliveryAddressHandler = (e) => {
    const requiredValue = ORDER_ADDRESS_REQUIRED_VALUE;
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
  };
};
