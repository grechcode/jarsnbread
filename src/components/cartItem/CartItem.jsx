import styles from "./cartItem.module.css";
import { replaceImgWithError } from "@/utils";

export const CartItem = ({ cart, dish }) => {
  return (
    <article className={styles.dish} key={dish}>
      <img
        className={styles.dishImg}
        src={`/images/${dish}.jpg`}
        onError={replaceImgWithError}
      />
      <h5 className={styles.dishName}>{cart[dish].name}</h5>
      <span className={styles.dishCount}>{cart[dish].count}x</span>
      <span className={styles.dishPrice}>{cart[dish].price} ₽</span>
    </article>
  );
};
