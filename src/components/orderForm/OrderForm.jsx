import styles from "./orderForm.module.css";
import { useAppContext } from "@/hooks";
import { cn, formatDate, getDateOptionsList, getTimeOptionsList } from "@/utils";
import { useEffect, useState } from "react";

export const OrderForm = () => {
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
    const dateOptionsList = getTimeOptionsList(deliveryDate);
    setTimeOptions(dateOptionsList);
  }, [deliveryDate]);

  const setReceivingHandler = () => {
    receiving === "pickup" ? setReceiving("delivery") : setReceiving("pickup");
  };

  const setDeliveryAddressHandler = (e) => {
    const requiredValue = "г. Екатеринбург, ";
    const value = e.target.value;
    if (!value.includes(requiredValue)) {
      setDeliveryAddress(requiredValue);
    } else {
      setDeliveryAddress(value);
    }
  };

  const setDeliveryDateHandler = (e) => setDeliveryDate(e.target.value);

  const setDeliveryTimeHandler = (e) => setDeliveryTime(e.target.value);

  const setOrderCommentHandler = (e) => setOrderComment(e.target.value);

  return (
    <form className={styles.form}>
      <button
        className={styles.receiveButton}
        onClick={setReceivingHandler}
        type="button"
      >
        <div
          className={cn(styles.slider, receiving === "delivery" && styles.sliderActive)}
        />
        <span className={styles.receiveType}>Самовывоз</span>
        <span className={styles.receiveType}>Доставка</span>
      </button>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
          placeholder="г. Екатеринбург..."
          value={
            receiving === "pickup"
              ? "г. Екатеринбург, ул. Шейнкмана, д. 19"
              : deliveryAddress
          }
          readOnly={receiving === "pickup" ? true : false}
          onChange={setDeliveryAddressHandler}
        />
        <span className={styles.inputDescription}>
          {receiving === "pickup"
            ? "Заказ будет доступен по адресу"
            : "Введи адрес доставки"}
        </span>
      </label>
      <label className={styles.inputLabel}>
        <select
          id="datePicker"
          onChange={setDeliveryDateHandler}
          className={styles.input}
        >
          {dateOptions?.map((optionValue) => (
            <option value={optionValue}>{formatDate(optionValue)}</option>
          ))}
        </select>
        <span className={styles.inputDescription}>{"Выбери дату получения"}</span>
      </label>
      <label className={styles.inputLabel}>
        <select
          id="timePicker"
          onChange={setDeliveryTimeHandler}
          className={styles.input}
        >
          {timeOptions?.map((optionValue) => (
            <option value={optionValue}>{optionValue}</option>
          ))}
        </select>
        <span className={styles.inputDescription}>
          {"Выбери время получения (минимальное время ожидания - 1 час 30 минут)"}
        </span>
      </label>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
          placeholder="Комментарий к заказу..."
          value={orderComment}
          onChange={setOrderCommentHandler}
        />
        <span className={styles.inputDescription}>
          Особые детали и пожелания к заказу
        </span>
      </label>
    </form>
  );
};
