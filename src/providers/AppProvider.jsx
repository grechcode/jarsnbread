import { useState } from "react";
import { AppContext } from "@/contexts";

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("menu");
  // const [cart, setCart] = useState({ wine_duck: 6, baguette: 3, cream_turkey: 1 });
  const [cart, setCart] = useState({});
  const [receiving, setReceiving] = useState("pickup");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [orderComment, setOrderComment] = useState("");

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        cart,
        setCart,
        receiving,
        setReceiving,
        deliveryAddress,
        setDeliveryAddress,
        deliveryDate,
        setDeliveryDate,
        deliveryTime,
        setDeliveryTime,
        orderComment,
        setOrderComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
