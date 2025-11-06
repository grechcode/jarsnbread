import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isImgsLoaded, setIsImgsLoaded] = useState(false);
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  const [isAnimationLoad, setIsAnimationLoad] = useState(false);
  const [imagesCount, setImagesCount] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!isFontsLoaded) return;
    const timeout = setTimeout(() => {
      setIsAnimationLoad(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [isFontsLoaded]);

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
      setIsImgsLoaded(true);
    }
  }, [imagesCount, loadedCount, isAnimationLoad]);

  return { isFontsLoaded, isImgsLoaded };
};
