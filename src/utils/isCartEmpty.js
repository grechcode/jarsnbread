export const isCartEmpty = (cart) => {
  Object.keys(cart).forEach((position) => {
    if (cart[position] > 0) {
      return false;
    }
  });
  return true;
};
