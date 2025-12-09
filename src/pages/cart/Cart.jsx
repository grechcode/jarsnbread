import { useAppContext } from "@/hooks";
import styles from "./cart.module.css";
import { calculateCart } from "@/utils";
import { CartItem, OrderForm } from "@/components";

export const Cart = () => {
  const { cart, appConfig } = useAppContext();

  return (
    <div className={styles.cart}>
      <h1 className="hidden">Корзина</h1>

      <section className={styles.cartList}>
        <h3 className={styles.label}>ВАШ ЗАКАЗ</h3>
        {Object.keys(cart).map(
          (dish) =>
            cart[dish].count > 0 && <CartItem key={dish} cart={cart} dish={dish} />
        )}
        <div className={styles.total}>
          <span>ИТОГО</span>
          <span className={styles.finalPrice}>{calculateCart(cart)} ₽</span>
        </div>
      </section>
      <OrderForm />
    </div>
  );
};
