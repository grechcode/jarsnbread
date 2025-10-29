import styles from "./menu.module.css";
import { MENU } from "@/constants";
import { DishCard, Loading } from "@/components";
import { cn } from "@/utils";
import { useLoading } from "@/hooks";

export const Menu = () => {
  const { contentLoaded, progressPercent } = useLoading();
  return (
    <>
      <Loading contentLoaded={contentLoaded} progressPercent={progressPercent} />

      <div className={cn(styles.menu, contentLoaded && styles.show)}>
        <h1 className="hidden">Меню</h1>

        {Object.keys(MENU).map((category) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryLabel}>{MENU[category].name}</h3>
            <div className={styles.dishListContainer}>
              <section className={styles.dishList}>
                {MENU[category].dishes.map((dish) => (
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
