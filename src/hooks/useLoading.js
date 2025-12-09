import { useEffect } from "react";
import { useAppContext } from "./useAppContext";
import { useFetchAppData } from "./useFetchAppData";

export const useLoading = () => {
  const {
    menu,
    appConfig,
    appDataError,
    isOnstartActionsDone,
    isAnimationLoad,
    setIsAnimationLoad,
    setIsOnstartActionsDone,
  } = useAppContext();
  const { fetchAppData } = useFetchAppData();

  const hapticAnimation = async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let tg = window.Telegram.WebApp;
    await sleep(1000);
    tg.HapticFeedback.impactOccurred("soft");
    await sleep(300);
    tg.HapticFeedback.impactOccurred("soft");
    await sleep(1500);
    tg.HapticFeedback.impactOccurred("soft");
  };

  useEffect(() => {
    fetchAppData();
    const timeout = setTimeout(() => {
      setIsAnimationLoad(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isAnimationLoad && menu && appConfig) {
      setIsOnstartActionsDone(true);
    }
  }, [isAnimationLoad, menu, appConfig]);

  return { hapticAnimation, appDataError, isOnstartActionsDone, fetchAppData };
};
