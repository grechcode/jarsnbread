import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isImgsLoaded, setIsImgsLoaded] = useState(false);
  const [isAnimationLoad, setIsAnimationLoad] = useState(false);
  const [imagesCount, setImagesCount] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);

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
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const allImages = document.querySelectorAll("img");
    setImagesCount(allImages.length);

    const loadCounter = () => setLoadedCount((prev) => prev + 1);

    allImages.forEach((img) => {
      img.addEventListener("load", loadCounter);
    });

    return () => {
      allImages.forEach((img) => {
        img.removeEventListener("load", loadCounter);
      });
    };
  }, []);

  // Дожидаемся окончания анимации и следим за загрузкой изображений
  useEffect(() => {
    if (isAnimationLoad && imagesCount === loadedCount) {
      setIsImgsLoaded(true);
    }
  }, [imagesCount, loadedCount, isAnimationLoad]);

  return { isImgsLoaded, hapticAnimation };
};
