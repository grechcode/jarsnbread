export const getDishProperty = (menu, dish, property) => {
  let res;
  Object.keys(menu).forEach((category) => {
    menu[category].dishes.forEach((dishInfo) => {
      if (dishInfo.id === dish) {
        res = dishInfo[property];
      }
    });
  });
  return res;
};
