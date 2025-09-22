import { useAppContext } from "@/hooks";
import styles from "./cart.module.css";
import { calculateCart, cn, getDishProperty } from "@/utils";
import { OrderForm } from "@/components";

export const Cart = () => {
  const { cart } = useAppContext();

  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = "/logo.jpg";
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
          <span className={styles.finalPrice}>{calculateCart(cart)} ₽</span>
        </footer>
      </ul>
      <OrderForm />
    </div>
  );
};
