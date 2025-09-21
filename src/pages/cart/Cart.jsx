import { useAppContext } from "@/hooks";
import styles from "./cart.module.css";
import { getDishProperty } from "@/utils";
import { PROMOCODES } from "@/constants";

export const Cart = () => {
  const { cart, setPromocode, setOrderComment } = useAppContext();

  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = "/logo.jpg";
  };

  const promocodeHandler = (e) => {
    setPromocode(e.target.value);
  };

  return (
    <div className={styles.cart}>
      <ul className={styles.cartList}>
        <h3 className={styles.label}>Ваш заказ</h3>
        {Object.keys(cart).map((dish) => (
          <li className={styles.dish}>
            <img
              className={styles.dishImg}
              src={`/${dish}.jpg`}
              onError={replaceImgWithError}
            />
            <span className={styles.dishName}>{getDishProperty(dish, "name")}</span>
            <span className={styles.dishCount}>{cart[dish]}x</span>
            <span className={styles.dishPrice}>
              {getDishProperty(dish, "price") * cart[dish]} ₽
            </span>
          </li>
        ))}
      </ul>
      <input
        className={styles.input}
        type="text"
        placeholder="Комментарий к заказу..."
        onChange={(e) => setOrderComment(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Промокод..."
        onChange={promocodeHandler}
      />
    </div>
  );
};
