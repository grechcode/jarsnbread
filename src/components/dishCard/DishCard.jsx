import styles from "./dishCard.module.css";
import { useAppContext } from "@/hooks";
import { replaceImgWithError } from "@/utils";
import { ButtonBar, Stickers } from "@/components";

export const DishCard = ({ dish }) => {
  const { setCart, cart } = useAppContext();

  const onClick = () => {
    if (dish?.publicationUrl) {
      let tg = window.Telegram.WebApp;
      tg.openTelegramLink(dish.publicationUrl);
    }
  };

  return (
    <article className={styles.dishCard}>
      <Stickers cart={cart} dish={dish} />
      <button type="button" onClick={onClick}>
        <img
          className={styles.dishImg}
          src={`/${dish.id}.jpg`}
          onError={replaceImgWithError}
          alt={dish.id}
        />
      </button>
      <h5 className={styles.dishName}>{dish.name}</h5>
      <ButtonBar cart={cart} setCart={setCart} dish={dish} />
    </article>
  );
};
