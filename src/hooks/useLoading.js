import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isAnimationLoad, setIsAnimationLoad] = useState(false);

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
    const timeout = setTimeout(() => {
      setIsAnimationLoad(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return { isAnimationLoad, hapticAnimation };
};
