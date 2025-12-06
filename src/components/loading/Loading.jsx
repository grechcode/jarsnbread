import styles from "./loading.module.css";
import { useLoading } from "@/hooks";
import { useEffect } from "react";
import { Logo, RunningLine } from "@/components";
import { cn } from "@/utils";

export const Loading = ({ hapticFeedback = false }) => {
  const { hapticAnimation, isAnimationLoad } = useLoading();

  useEffect(() => {
    if (hapticFeedback) {
      hapticAnimation();
    }
  }, []);

  return (
    <div className={cn(styles.loading, isAnimationLoad && styles.hide)}>
      <RunningLine className={styles.upperLine} />
      <Logo isAnimated={true} />
      <RunningLine className={styles.downerLine} />
    </div>
  );
};
