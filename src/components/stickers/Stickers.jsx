import styles from "./stickers.module.css";

export const Stickers = ({ cart, dish }) => {
  return (
    <>
      {cart[dish.id]?.count > 0 && (
        <span className={styles.countSticker}>{cart[dish.id].count}</span>
      )}
      <div className={styles.tagList}>
        {dish?.hit > 0 && <span className={styles.hitSticker}>HIT</span>}
        {dish?.new > 0 && <span className={styles.newSticker}>NEW</span>}
      </div>
    </>
  );
};
