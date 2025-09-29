import styles from "./orderForm.module.css";
import { useAppContext } from "@/hooks";
import { cn, getDateOptionsList, getTimeOptionsList } from "@/utils";
import { Select } from "@/components";
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
    const timeOptionsList = getTimeOptionsList(deliveryDate);
    setTimeOptions(timeOptionsList);
    setDeliveryTime(timeOptionsList[0]);
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
      <div className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
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
      </div>
      <div className={styles.inputLabel}>
        <Select value={deliveryDate} setValue={setDeliveryDate} options={dateOptions} />
        <span className={styles.inputDescription}>{"Выбери дату получения"}</span>
      </div>
      <div className={styles.inputLabel}>
        <Select value={deliveryTime} setValue={setDeliveryTime} options={timeOptions} />
        <span className={styles.inputDescription}>
          {"Выбери время получения (минимальное время ожидания - 1 час 30 минут)"}
        </span>
      </div>
      <div className={styles.inputLabel}>
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
      </div>
    </form>
  );
};
