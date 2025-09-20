import { AppContext } from "@/contexts";
import { useContext } from "react";

export const useAppContext = () => {
  return useContext(AppContext);
};
