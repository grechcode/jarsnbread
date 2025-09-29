import { calculateCart } from "./calculateCart";

export const generateOrderDetailsText = ({
  cart,
  receiving,
  deliveryAddress,
  deliveryDate,
  deliveryTime,
  orderComment,
}) => {
  let detailText = "Чек:\n";
  Object.keys(cart).forEach((dish) => {
    if (cart[dish].count > 0) {
      detailText += `• ${cart[dish].name}\n⌙ x${cart[dish].count}  . . . . . . . . . . . . . . . . . . . . ${cart[dish].price} ₽\n`;
    }
  });
  detailText += `⌙\n⌙ ИТОГО . . . . . . . . . . . . . . . . ${calculateCart(cart)} ₽\n`;

  receiving === "pickup"
    ? (detailText += `Заказ доступен по адресу: г. Екатеринбург, ул. Шейнкмана, д. 19\n`)
    : (detailText += `Адрес доставки: ${deliveryAddress}\n`);
  detailText += `Дата получения: ${deliveryDate}\n`;
  detailText += `Время получения: ${deliveryTime}\n`;
  if (orderComment.trim().length > 0) {
    detailText += `Комментарий: ${orderComment}\n`;
  }
  return detailText;
};
