import { useState } from "react";
import { AppContext } from "@/contexts";
import { ORDER_ADDRESS_REQUIRED_VALUE, PAGES } from "@/constants";

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(PAGES.cart);
  const [cart, setCart] = useState({});
  const [receiving, setReceiving] = useState("pickup");
  const [deliveryAddress, setDeliveryAddress] = useState(ORDER_ADDRESS_REQUIRED_VALUE);
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
