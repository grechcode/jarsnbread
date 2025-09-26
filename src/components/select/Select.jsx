import { useState } from "react";
import styles from "./select.module.css";
import { cn, formatDate } from "@/utils";

export const Select = ({ value, setValue, options }) => {
  const [isSelectOpen, setSelectOpen] = useState(false);

  const onSelect = (e) => {
    if (e.target.value === value) {
      setSelectOpen(true);
    } else {
      setValue(e.target.value);
      setSelectOpen(false);
    }
  };

  return (
    <div className={cn(styles.select, isSelectOpen && styles.openSelect)}>
      {options?.map((optionValue) => (
        <button
          type="button"
          value={optionValue}
          onClick={onSelect}
          className={cn(
            styles.selectButton,
            !isSelectOpen && optionValue !== value && "hidden"
          )}
        >
          {optionValue}
        </button>
      ))}
    </div>
  );
};
