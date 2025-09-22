import { useAppContext } from "@/hooks";
import styles from "./orderForm.module.css";
import { cn } from "@/utils";
import { getDatetimeParams } from "@/utils";
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
    receiving == "pickup" ? setReceiving("delivery") : setReceiving("pickup");
  };

  const setDeliveryAddressHandler = (e) => setDeliveryAddress(e.target.value);

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
        <input
          className={styles.input}
          type="date"
          value={deliveryDate}
          min={currentDate}
          max={maxDate}
          onChange={setDeliveryDateHandler}
          required={true}
        />
        <span className={styles.inputDescription}>Выбери дату получения</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="time"
          value={deliveryTime}
          min={currentDate !== deliveryDate ? "09:00" : minWaitingTime}
          max="22:00"
          onChange={setDeliveryTimeHandler}
          required={true}
        />
        <span className={styles.inputDescription}>Выбери время получения</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
          placeholder="Комментарий к заказу..."
          onChange={setOrderCommentHandler}
        />
        <span className={styles.inputDescription}>
          Особые детали и пожелания к заказу
        </span>
      </label>
    </form>
  );
};
