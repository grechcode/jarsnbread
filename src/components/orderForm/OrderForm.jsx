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
    const requiredValue = "г. Екатеринбург, ";
    const value = e.target.value;
    if (!value.includes(requiredValue)) {
      setDeliveryAddress(requiredValue);
    } else {
      setDeliveryAddress(value);
    }
  };

  const setDeliveryDateHandler = (e) => {
    const value = e.target.value;
    // const { dateValue, timeValue } = validateDatetimeValues({ value, deliveryTime });
    setDeliveryDate(value);
  };

  const setDeliveryTimeHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    // const userSelectDate = new Date(`${deliveryDate} ${value}`).getTime();
    // const minAvailableDate = new Date(`${deliveryDate}, 09:00`).getTime();
    // const maxAvailableDate = new Date(`${deliveryDate}, 22:00`).getTime();
    // setDeliveryTime(value);
    // userSelectDate < minAvailableDate && setDeliveryTime("09:00");
    // userSelectDate > maxAvailableDate && setDeliveryTime("22:00");

    // const { dateValue, timeValue } = validateDatetimeValues({ value, deliveryTime });
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
      {/* <label className={styles.inputLabel}>
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
      </label> */}
      <label className={styles.inputLabel}>
        <div className={styles.input}>
          <select name="hourPicker" id="hourPicker" onChange={setDeliveryTimeHandler}>
            <option value="10">10:00</option>
            <option value="10">10:15</option>
            <option value="10">10:30</option>
            <option value="10">10:45</option>
            <option value="10">11:00</option>
            <option value="10">11:15</option>
            <option value="10">11:30</option>
            <option value="10">11:45</option>
            <option value="10">12:00</option>
            <option value="10">12:15</option>
            <option value="10">12:30</option>
            <option value="10">12:45</option>
            <option value="10">13:00</option>
            <option value="10">13:15</option>
            <option value="10">13:30</option>
            <option value="10">13:45</option>
            <option value="10">14:00</option>
            <option value="10">14:15</option>
            <option value="10">14:30</option>
            <option value="10">14:45</option>
            <option value="10">15:00</option>
            <option value="10">15:15</option>
            <option value="10">15:30</option>
            <option value="10">15:45</option>
            <option value="10">16:00</option>
            <option value="10">16:15</option>
            <option value="10">16:30</option>
            <option value="10">16:45</option>
            <option value="10">17:00</option>
            <option value="10">17:15</option>
            <option value="10">17:30</option>
            <option value="10">17:45</option>
            <option value="10">18:00</option>
            <option value="10">18:15</option>
            <option value="10">18:30</option>
            <option value="10">18:45</option>
            <option value="10">19:00</option>
            <option value="10">19:15</option>
            <option value="10">19:30</option>
            <option value="10">19:45</option>
            <option value="10">20:00</option>
            <option value="10">20:15</option>
            <option value="10">20:30</option>
            <option value="10">20:45</option>
            <option value="10">21:00</option>
            <option value="10">21:15</option>
            <option value="10">21:30</option>
            <option value="10">21:45</option>
            <option value="10">22:00</option>
          </select>
        </div>

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
