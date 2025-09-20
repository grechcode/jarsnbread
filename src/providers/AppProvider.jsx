import { useState } from "react";
import { AppContext } from "@/contexts";
import { PAGES } from "@/constants";

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("menu");
  const [cart, setCart] = useState({});
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
