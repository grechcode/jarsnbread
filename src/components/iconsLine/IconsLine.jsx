import { Icon } from "@/components";
import styles from "./iconsLine.module.css";
import { cn } from "@/utils";

export const IconsLine = ({ animation }) => (
  <div className={cn(styles.iconsLine, styles[animation])}>
    {Array(6)
      .fill(null)
      .map(() => (
        <>
          <Icon name="jar" />
          <Icon name="xMark" />
          <Icon name="bread" />
          <Icon name="xMark" />
        </>
      ))}
  </div>
);
