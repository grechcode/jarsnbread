export const generateOrderDetailsText = (
  cart,
  receiving,
  deliveryAddress,
  deliveryDate,
  deliveryTime,
  orderComment
) => {
  let detailText = "Чек:\n";
  Object.keys(cart).forEach((dish) => {
    detailText += `• ${cart[dish].name} .......... ${cart[dish].price} (${cart[dish].count})\n`;
  });
  detailText += `Способ получения: ${receiving}\n`;
  receiving === "pickup"
    ? (detailText += `Заказ доступен по адресу: г. Екатеринбург, ул. Шейнкмана, д. 19\n`)
    : (detailText += `Адрес доставки: ${deliveryAddress}\n`);
  detailText += `Дата доставки: ${deliveryDate}\n`;
  detailText += `Время доставки: ${deliveryTime}\n`;
  if (orderComment.length > 0) {
    detailText += `Комментарий: ${orderComment}\n`;
  }
  return detailText;
};
