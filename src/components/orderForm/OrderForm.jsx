import styles from "./orderForm.module.css";
import { useAppContext } from "@/hooks";
import { cn, getDatetimeParams } from "@/utils";
import { validateDatetimeValues } from "@/utils/getDatetimeParams";
import { useEffect } from "react";

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

  const { currentDate, minWaitingTime, maxDate } = getDatetimeParams();

  useEffect(() => {
    setDeliveryDate(currentDate);
    setDeliveryTime(minWaitingTime);
  }, []);

  const setReceivingHandler = () => {
    receiving === "pickup" ? setReceiving("delivery") : setReceiving("pickup");
  };

  const setDeliveryAddressHandler = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const setDeliveryDateHandler = (e) => {
    const value = e.target.value;
    // const { dateValue, timeValue } = validateDatetimeValues({ value, deliveryTime });
    setDeliveryDate(value);
  };

  const setDeliveryTimeHandler = (e) => {
    const value = e.target.value;
    // const { dateValue, timeValue } = validateDatetimeValues({ value, deliveryTime });
    setDeliveryTime(value);
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
        <input
          className={styles.input}
          type="date"
          value={deliveryDate}
          min={currentDate}
          max={maxDate}
          onChange={setDeliveryDateHandler}
          required={true}
        />
        <span className={styles.inputDescription}>{"Выбери дату получения"}</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="time"
          value={deliveryTime}
          min={currentDate !== deliveryDate ? "10:30" : minWaitingTime}
          max="22:30"
          onChange={setDeliveryTimeHandler}
          required={true}
        />
        <span className={styles.inputDescription}>
          {"Выбери дату получения (минимальное время ожидания - 1 час 30 минут)"}
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
