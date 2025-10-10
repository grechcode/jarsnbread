export const calculateCart = (cart) => {
  let result = 0;
  Object.keys(cart).map((dish) => {
    result += cart[dish].price;
  });
  return result;
};
