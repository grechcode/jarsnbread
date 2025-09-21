import { MENU } from "@/constants";

export const calculateCart = (cart) => {
  const getPrice = (dish) => {
    let price;
    Object.keys(MENU).forEach((category) => {
      MENU[category].dishes.forEach((dishInfo) => {
        if (dishInfo.id === dish) {
          price = dishInfo.price;
        }
      });
    });
    return price;
  };
  let result = 0;
  Object.keys(cart).map((dish) => {
    let dishPrice = getPrice(dish);
    console.log(dishPrice);
    let count = cart[dish];
    result += dishPrice * count;
  });
  return result;
};
