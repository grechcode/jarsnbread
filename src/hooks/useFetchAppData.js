import { useCallback } from "react";
import { useAppContext } from "./useAppContext";
import { getData } from "@/api";
import { APP_CONFIG_URL, MENU_URL } from "@/constants";

export const useFetchAppData = () => {
  const { setMenu, setAppConfig, setIsAppDataLoading, setAppDataError } = useAppContext();

  const fetchAppData = useCallback(async () => {
    try {
      setMenu(null);
      setAppConfig(null);
      setAppDataError(null);
      setIsAppDataLoading(true);
      const menu = await getData(MENU_URL);
      const appConfig = await getData(APP_CONFIG_URL);
      setMenu(menu);
      setAppConfig(appConfig);
    } catch (error) {
      setAppDataError(error.message);
    } finally {
      setIsAppDataLoading(false);
    }
  }, [setMenu, setAppConfig, setIsAppDataLoading, setAppDataError]);

  return { fetchAppData };
};
