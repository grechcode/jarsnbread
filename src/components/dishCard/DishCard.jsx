import styles from "./dishCard.module.css";
import { useAppContext } from "@/hooks";
import { replaceImgWithError } from "@/utils";
import { ButtonBar, Stickers } from "@/components";
import { IMAGES_URL } from "@/constants";

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
      <button type="button" onClick={onClick} className={styles.imgButtonWrapper}>
        <img
          className={styles.dishImg}
          src={`${IMAGES_URL}/${dish.id}.jpg`}
          onError={replaceImgWithError}
          alt={dish.id}
        />
      </button>
      <h5 className={styles.dishName}>{dish.name}</h5>
      <ButtonBar cart={cart} setCart={setCart} dish={dish} />
    </article>
  );
};
