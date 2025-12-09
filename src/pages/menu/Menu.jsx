import { useAppContext } from "@/hooks";
import styles from "./menu.module.css";
import { DishCard } from "@/components";

export const Menu = () => {
  const { menu } = useAppContext();

  return (
    <>
      <div className={styles.menu}>
        <h1 className="hidden">Меню</h1>

        {menu &&
          Object.keys(menu).map((category) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryLabel}>{menu[category].name}</h3>
              <div className={styles.dishListContainer}>
                <section className={styles.dishList}>
                  {menu[category].dishes.map((dish) => (
                    <DishCard dish={dish} key={dish.id} />
                  ))}
                </section>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
