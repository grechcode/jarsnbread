import styles from "./orderForm.module.css";
import { useOrderForm } from "@/hooks";
import { cn } from "@/utils";
import { Select } from "@/components";
import {
  FORM_COMMENT_LABEL,
  FORM_DATE_LABEL,
  FORM_DELIVERY_LABEL,
  FORM_PICKUP_LABEL,
  FORM_TIME_LABEL,
} from "@/constants";

export const OrderForm = () => {
  const {
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
  } = useOrderForm();

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
      <div className={styles.inputWrapper}>
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
          {receiving === "pickup" ? FORM_PICKUP_LABEL : FORM_DELIVERY_LABEL}
        </span>
      </div>
      <div className={styles.inputWrapper}>
        <Select value={deliveryDate} setValue={setDeliveryDate} options={dateOptions} />
        <span className={styles.inputDescription}>{FORM_DATE_LABEL}</span>
      </div>
      <div className={styles.inputWrapper}>
        <Select value={deliveryTime} setValue={setDeliveryTime} options={timeOptions} />
        <span className={styles.inputDescription}>{FORM_TIME_LABEL}</span>
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Комментарий к заказу..."
          value={orderComment}
          onChange={setOrderCommentHandler}
        />
        <span className={styles.inputDescription}>{FORM_COMMENT_LABEL}</span>
      </div>
    </form>
  );
};
