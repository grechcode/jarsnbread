import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const onClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback && callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [ref, callback]);
};
