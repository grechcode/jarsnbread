import styles from "./loading.module.css";
import { cn } from "@/utils";
import { useLoading } from "@/hooks";
import { useEffect } from "react";

export const Loading = () => {
  const { hapticAnimation } = useLoading();

  useEffect(() => {
    hapticAnimation();
  }, []);

  const JarIcon = () => (
    <div className={styles.jarIcon}>
      <div className={styles.iconCap} />
      <div className={styles.iconJar} />
    </div>
  );

  const XIcon = () => (
    <div className={styles.xIcon}>
      <div className={styles.firstStick} />
      <div className={styles.secondStick} />
    </div>
  );

  const BreadIcon = () => (
    <div className={styles.breadIcon}>
      <div className={styles.iconBread} />
    </div>
  );

  const AnimationLine = ({ animationDirection }) => (
    <div className={cn(styles.animationLine, styles[animationDirection])}>
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <>
            <JarIcon />
            <XIcon />
            <BreadIcon />
            <XIcon />
          </>
        ))}
    </div>
  );

  const Logo = () => (
    <div className={styles.logo}>
      <div className={styles.cap} />
      <span className={styles.jarText}>БАНОЧКИ</span>
      <span className={styles.jarBottom}>И</span>
      <span className={styles.bread}>ХЛЕБ</span>
    </div>
  );

  return (
    <div className={styles.loading}>
      <div className={styles.upperLine}>
        <AnimationLine animationDirection="right" />
        <AnimationLine animationDirection="left" />
      </div>
      <Logo />
      <div className={styles.downerLine}>
        <AnimationLine animationDirection="right" />
        <AnimationLine animationDirection="left" />
      </div>
    </div>
  );
};
