import { useRef, useState } from "react";
import styles from "./select.module.css";
import { cn, formatDate } from "@/utils";
import { useClickOutside } from "@/hooks";

export const Select = ({ value, setValue, options }) => {
  const [isSelectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef(null);
  useClickOutside(selectRef, () => setSelectOpen(false));

  const onSelect = (e) => {
    if (e.target.value === value) {
      setSelectOpen((prev) => !prev);
      if (!isSelectOpen) {
        setTimeout(() => {
          e.target.scrollIntoView(true);
        }, 10);
      }
    } else {
      let tg = window.Telegram.WebApp;
      tg.HapticFeedback.selectionChanged();
      setValue(e.target.value);
      setSelectOpen(false);
    }
  };

  return (
    <div className={cn(styles.select, isSelectOpen && styles.openSelect)} ref={selectRef}>
      {options?.map((optionValue) => (
        <button
          type="button"
          value={optionValue}
          onClick={onSelect}
          className={cn(
            styles.selectButton,
            isSelectOpen && optionValue === value && styles.selected,
            !isSelectOpen && optionValue !== value && "hidden"
          )}
        >
          {formatDate(optionValue)}
        </button>
      ))}
    </div>
  );
};
