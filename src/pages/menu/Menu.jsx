import { MENU } from "@/constants";
import styles from "./menu.module.css";
import { useAppContext } from "@/hooks";
import { cn, isCartEmpty } from "@/utils";
import { useEffect } from "react";

export const Menu = () => {
  const { currentPage, setCart, cart } = useAppContext();

  useEffect(() => {
    let tg = window.Telegram.WebApp;
    if (isCartEmpty(cart)) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [cart]);

  const onAdd = (dish) => {
    setCart((prev) => {
      if (!prev[dish]) {
        prev[dish] = 0;
      }
      prev[dish] += 1;
      return { ...prev };
    });
  };

  const onRemove = (dish) => {
    setCart((prev) => {
      if (prev[dish] > 0) {
        prev[dish] -= 1;
      }
      return { ...prev };
    });
  };

  return (
    <div className={styles.menu}>
      {Object.keys(MENU).map((category) => (
        <div key={category} className={styles.category}>
          <h3 className={styles.categoryLabel}>{MENU[category].name}</h3>
          <div className={styles.dishListContainer}>
            <ul className={styles.dishList}>
              {MENU[category].dishes.map((dish) => (
                <li key={dish.id} className={styles.dish}>
                  <article className={styles.dishCard}>
                    {cart[dish.id] > 0 && (
                      <span className={styles.countSticker}>{cart[dish.id]}</span>
                    )}
                    <img className={styles.dishImg} src="baguette.jpeg" alt={dish.id} />
                    <span className={styles.dishName}>{dish.name}</span>
                    <div className={styles.buttonBar}>
                      <button
                        type="button"
                        className={cn(styles.removeBtn, cart[dish.id] && styles.showBtn)}
                        onClick={() => onRemove(dish.id)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        className={styles.addBtn}
                        onClick={() => onAdd(dish.id)}
                        disabled={!dish.isAvailable}
                      >
                        {cart[dish.id]
                          ? "+"
                          : dish.isAvailable
                          ? `${dish.price} ₽`
                          : "Всё сьели :("}
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
