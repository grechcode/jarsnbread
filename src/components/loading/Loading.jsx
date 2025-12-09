import styles from "./loading.module.css";
import { useLoading } from "@/hooks";
import { useEffect } from "react";
import { Logo, RunningLine } from "@/components";
import { cn } from "@/utils";

export const Loading = ({ hapticFeedback = false }) => {
  const { hapticAnimation, appDataError, isOnstartActionsDone, fetchAppData } =
    useLoading();

  useEffect(() => {
    if (hapticFeedback) {
      hapticAnimation();
    }
  }, [hapticFeedback, hapticAnimation]);

  return (
    <div className={cn(styles.loading, isOnstartActionsDone && styles.hide)}>
      <RunningLine className={styles.upperLine} />
      {appDataError && <button onClick={fetchAppData}>Попробовать еще раз</button>}
      {!appDataError && <Logo isAnimated={true} />}
      <RunningLine className={styles.downerLine} />
    </div>
  );
};
