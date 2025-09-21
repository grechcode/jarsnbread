import { useState } from "react";
import { AppContext } from "@/contexts";

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("cart");
  const [cart, setCart] = useState({ wine_duck: 6, baguette: 3, cream_turkey: 1 });
  // const [cart, setCart] = useState({});
  const [orderComment, setOrderComment] = useState(null);
  const [promocode, setPromocode] = useState(null);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        cart,
        setCart,
        orderComment,
        setOrderComment,
        promocode,
        setPromocode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
