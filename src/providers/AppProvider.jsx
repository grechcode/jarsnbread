import { useState } from "react";
import { AppContext } from "@/contexts";

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("menu");
  // const [cart, setCart] = useState({
  //   wine_duck: { count: 4, name: 'Парфе "Винная утка"', price: 1360 },
  //   baguette: { count: 2, name: "Багет", price: 320 },
  //   cream_turkey: { count: 1, name: "Индейка со сливками", price: 360 },
  // });

  const [cart, setCart] = useState({});
  const [receiving, setReceiving] = useState("pickup");
  const [deliveryAddress, setDeliveryAddress] = useState("г. Екатеринбург, ");
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
