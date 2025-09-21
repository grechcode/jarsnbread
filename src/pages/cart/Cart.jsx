import { useAppContext } from "@/hooks";
import styles from "./cart.module.css";
import { calculateCart, cn, getDishProperty } from "@/utils";
import { PROMOCODES } from "@/constants";
import { useState } from "react";

export const Cart = () => {
  const [discount, setDiscount] = useState(null);
  const { cart, setPromocode, setOrderComment } = useAppContext();

  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = "/logo.jpg";
  };

  const promocodeHandler = (e) => {
    let value = e.target.value;
    setPromocode(value);
    setDiscount(null);
    Object.keys(PROMOCODES).map((code) => {
      if (value === code) {
        let discount = PROMOCODES[code];
        setDiscount(discount);
      }
    });
  };

  return (
    <div className={styles.cart}>
      <ul className={styles.cartList}>
        <h3 className={styles.label}>ВАШ ЗАКАЗ</h3>
        {Object.keys(cart).map(
          (dish) =>
            cart[dish] > 0 && (
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
            )
        )}
        <footer className={styles.footer}>
          <span>ИТОГО</span>
          {discount ? (
            <>
              <span className={styles.oldPrice}>{calculateCart(cart)} ₽</span>
              <span>
                {calculateCart(cart) - (calculateCart(cart) * discount) / 100} ₽
              </span>
            </>
          ) : (
            <span className={styles.finalPrice}>{calculateCart(cart)} ₽</span>
          )}
        </footer>
      </ul>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
          placeholder="Комментарий к заказу..."
          onChange={(e) => setOrderComment(e.target.value)}
        />
        <span>Особые детали и пожелания к заказу</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          className={styles.input}
          type="text"
          placeholder="Промокод..."
          onChange={promocodeHandler}
        />
        <span>Получи свою скидку!</span>
      </label>
      <label className={styles.inputLabel}>
        <select className={styles.input}>
          <option value="self">Самовывоз</option>
          <option value="delivery">Доставка</option>
        </select>
        <span>Выбери способ получения заказа</span>
      </label>
      <label className={styles.inputLabel}>
        <input className={styles.input} type="text" placeholder="г. Екатеринбург..." />
        <span>Введи адрес доставки</span>
      </label>
      <label className={styles.inputLabel}>
        <input className={styles.input} type="date" />
        <span>Выбери дату доставки</span>
      </label>
      <label className={styles.inputLabel}>
        <input className={styles.input} type="time" />
        <span>Выбери время доставки</span>
      </label>
    </div>
  );
};
