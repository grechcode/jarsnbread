import { MENU } from "@/constants";

export const getDishCategory = (dish) => {
  let res;
  Object.keys(MENU).forEach((category) => {
    MENU[category].dishes.forEach((dishInfo) => {
      if (dishInfo.id === dish) {
        res = category;
      }
    });
  });
  return res;
};
