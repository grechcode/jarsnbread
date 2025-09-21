import { getDishProperty } from "./getDishProperty";

export const calculateCart = (cart) => {
  let result = 0;
  Object.keys(cart).map((dish) => {
    let dishPrice = getDishProperty(dish, "price");
    console.log(dishPrice);
    let count = cart[dish];
    result += dishPrice * count;
  });
  return result;
};
