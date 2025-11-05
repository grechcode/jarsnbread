import { useEffect, useState } from "react";

export const useLoading = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [imagesCount, setImagesCount] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    // const allImages = document.querySelectorAll("img");
    // setImagesCount(allImages.length);

    // const loadCounter = () => setLoadedCount((prev) => prev + 1);

    // allImages.forEach((img) => {
    //   img.addEventListener("load", loadCounter);
    // });

    // return () => {
    //   allImages.forEach((img) => {
    //     img.removeEventListener("load", loadCounter);
    //   });
    // };

    const timeout = setTimeout(() => {
      setImagesCount(11);
      setLoadedCount(11);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (imagesCount === loadedCount) {
      setContentLoaded(true);
    }
  }, [imagesCount, loadedCount]);

  return contentLoaded;
};
