import { getDishCategory } from "./getDishCategory";

export const isBreadInCart = (cart) => {
  let res;
  res = false;

  Object.keys(cart).map((dish) => {
    const dishCategory = getDishCategory(dish);
    if (dishCategory === "breads") {
      res = true;
    }
  });
  return res;
};
