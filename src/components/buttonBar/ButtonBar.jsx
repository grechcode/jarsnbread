import styles from "./buttonBar.module.css";
import { getDishProperty, cn } from "@/utils";

export const ButtonBar = ({ cart, setCart, dish }) => {
  let tg = window.Telegram.WebApp;

  const onAdd = (dish) => {
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
    tg.HapticFeedback.selectionChanged();
    setCart((prev) => {
      if (prev[dish].count > 0) {
        prev[dish].count -= 1;
        prev[dish].price -= getDishProperty(dish, "price");
      }
      return { ...prev };
    });
  };

  const getAddButtonText = () => {
    return cart[dish.id]?.count > 0
      ? "+"
      : dish.isAvailable
      ? `${dish.price} ₽`
      : "Всё сьели :(";
  };

  return (
    <div className={styles.buttonBar}>
      <button
        type="button"
        className={cn(styles.removeBtn, cart[dish.id]?.count > 0 && styles.showBtn)}
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
        {getAddButtonText()}
      </button>
    </div>
  );
};
