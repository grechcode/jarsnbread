import styles from "./dishCard.module.css";
import { useAppContext } from "@/hooks";
import { replaceImgWithError } from "@/utils";
import { ButtonBar, Stickers } from "@/components";

export const DishCard = ({ dish }) => {
  const { setCart, cart } = useAppContext();

  return (
    <article className={styles.dishCard}>
      <Stickers cart={cart} dish={dish} />
      {/* <label htmlFor={dish.id} className={styles.checkboxLabel}>
        <input type="checkbox" id={dish.id} className={styles.checkbox} />
        <img
          className={styles.dishImg}
          src={`/${dish.id}.jpg`}
          onError={replaceImgWithError}
          alt={dish.id}
        />
        <span className={styles.dishDesc}>{dish.description}</span>
      </label> */}
      <button
        onClick={() => {
          let tg = window.Telegram.WebApp;
          tg.openTelegramLink("https://t.me/jarsnbread/49");
        }}
      >
        <img
          className={styles.dishImg}
          src={`/${dish.id}.jpg`}
          onError={replaceImgWithError}
          alt={dish.id}
        />
      </button>
      <span className={styles.dishName}>{dish.name}</span>
      <ButtonBar cart={cart} setCart={setCart} dish={dish} />
    </article>
  );
};
