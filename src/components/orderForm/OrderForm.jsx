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
    const userSelectDate = new Date(`${deliveryDate} ${value}`).getTime();
    const minAvailableDate = new Date(`${deliveryDate}, 09:00`).getTime();
    const maxAvailableDate = new Date(`${deliveryDate}, 22:00`).getTime();
    setDeliveryTime(value);
    userSelectDate < minAvailableDate && setDeliveryTime("09:00");
    userSelectDate > maxAvailableDate && setDeliveryTime("22:00");

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
          <select name="" id="" className={styles.select}>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
          </select>
          :
          <select name="" id="" className={styles.select}>
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
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
