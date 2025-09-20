export const isCartEmpty = (cart) => {
  let res = true;
  Object.keys(cart).map((position) => {
    if (cart[position] > 0) {
      res = false;
    }
  });
  return res;
};
