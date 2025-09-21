import { MENU } from "@/constants";

export const getDishProperty = (dish, property) => {
  let res;
  Object.keys(MENU).forEach((category) => {
    MENU[category].dishes.forEach((dishInfo) => {
      if (dishInfo.id === dish) {
        res = dishInfo[property];
      }
    });
  });
  return res;
};
