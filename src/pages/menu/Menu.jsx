import { MENU } from "@/constants";
import styles from "./menu.module.css";
import { useAppContext } from "@/hooks";
import { cn, getDishProperty } from "@/utils";

export const Menu = () => {
  const { setCart, cart } = useAppContext();

  const replaceImgWithError = (e) => {
    e.target.onerror = null;
    e.target.src = "/logo.jpg";
  };

  const onAdd = (dish) => {
    let tg = window.Telegram.WebApp;
    tg.HapticFeedback.selectionChanged();
    setCart((prev) => {
      if (!prev[dish]) {
        prev[dish] = { count: 0, name: getDishProperty(dish, "name"), price: 0 };
      }
      prev[dish].count += 1;
      prev[dish].price += getDishProperty(dish, "price");
      return { ...prev };
    });
  };

  const onRemove = (dish) => {
    let tg = window.Telegram.WebApp;
    tg.HapticFeedback.selectionChanged();
    setCart((prev) => {
      if (prev[dish].count > 0) {
        prev[dish].count -= 1;
        prev[dish].price -= getDishProperty(dish, "price");
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
                <li key={dish.id} className={styles.dishCard}>
                  {cart[dish.id]?.count > 0 && (
                    <span className={styles.countSticker}>{cart[dish.id].count}</span>
                  )}
                  <div className={styles.tagList}>
                    {dish?.hit > 0 && <span className={styles.hitTag}>HIT</span>}
                    {dish?.new > 0 && <span className={styles.newTag}>NEW</span>}
                  </div>
                  <label htmlFor={dish.id} className={styles.checkboxLabel}>
                    <input type="checkbox" id={dish.id} className={styles.checkbox} />
                    <img
                      className={styles.dishImg}
                      src={`/${dish.id}.jpg`}
                      onError={replaceImgWithError}
                      alt={dish.id}
                    />
                    <span className={styles.dishDesc}>{dish.description}</span>
                  </label>
                  <span className={styles.dishName}>{dish.name}</span>
                  <div className={styles.buttonBar}>
                    <button
                      type="button"
                      className={cn(
                        styles.removeBtn,
                        cart[dish.id]?.count > 0 && styles.showBtn
                      )}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
