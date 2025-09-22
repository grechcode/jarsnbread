export const generateOrderDetailsText = (
  cart,
  receiving,
  deliveryAddress,
  deliveryDate,
  deliveryTime,
  orderComment
) => {
  const dateString = deliveryDate.toISOString().split("T")[0];
  const timeString = deliveryDate.toISOString().split("T")[1].slice(0, 5);

  let detailText = "Чек:\n";
  Object.keys(cart).forEach((dish) => {
    detailText += `• ${cart[dish].name}\n⌙ x${cart[dish].count}  . . . . . . . . . . . . . . . . . . . . ${cart[dish].price} ₽\n`;
  });
  detailText += `Способ получения: ${receiving}\n`;
  receiving === "pickup"
    ? (detailText += `Заказ доступен по адресу: г. Екатеринбург, ул. Шейнкмана, д. 19\n`)
    : (detailText += `Адрес доставки: ${deliveryAddress}\n`);
  detailText += `Дата доставки: ${dateString}\n`;
  detailText += `Время доставки: ${timeString}\n`;
  if (orderComment.trim().length > 0) {
    detailText += `Комментарий: ${orderComment}\n`;
  }
  return detailText;
};
