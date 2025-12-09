import { getDishCategory } from "./getDishCategory";

export const isBreadInCart = (menu, cart) => {
  let res;
  res = false;

  Object.keys(cart).map((dish) => {
    const dishCategory = getDishCategory(menu, dish);
    if (dishCategory === "breads") {
      if (cart[dish].count > 0) res = true;
    }
  });
  return res;
};
