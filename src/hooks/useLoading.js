import { useEffect, useState } from "react";

export const useLoading = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [imagesCount, setImagesCount] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);

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
    if (imagesCount === loadedCount) {
      setContentLoaded(true);
    }
  }, [imagesCount, loadedCount]);

  const progressPercent = `${100 - (loadedCount / imagesCount) * 100}%`;

  return { contentLoaded, progressPercent };
};
