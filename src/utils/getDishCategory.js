export const getDishCategory = (menu, dish) => {
  let res;
  Object.keys(menu).forEach((category) => {
    menu[category].dishes.forEach((dishInfo) => {
      if (dishInfo.id === dish) {
        res = category;
      }
    });
  });
  return res;
};
