import { useAppContext } from "@/hooks";
import { Cart, Menu } from "@/pages";
import { useEffect } from "react";

function App() {
  const { currentPage } = useAppContext();

  const PAGES = {
    menu: <Menu />,
    cart: <Cart />,
  };

  return <div>{PAGES[currentPage]}</div>;
}

export default App;
