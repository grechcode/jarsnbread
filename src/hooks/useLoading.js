import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isImgsLoaded, setIsImgsLoaded] = useState(false);
  const [isAnimationLoad, setIsAnimationLoad] = useState(false);
  const [imagesCount, setImagesCount] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationLoad(true);
    }, 4000);
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

  useEffect(() => {
    if (isAnimationLoad && imagesCount === loadedCount) {
      console.log("IMGs loaded");
      setIsImgsLoaded(true);
    }
  }, [imagesCount, loadedCount, isAnimationLoad]);

  return isImgsLoaded;
};
