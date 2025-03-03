import styles from "./AboutMe.module.scss";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMobile } from "../../hooks/useMobile";
import { ContainersInfo } from "../../components/ContainersInfo/ContainersInfo";

export const AboutMe = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const [endValue, setEndValue] = useState("-85%");

  useEffect(() => {
    const updateEndValue = () => {
      const width = window.innerWidth;

      switch (true) {
        case width >= 2560:
          setEndValue("-77.5%");
          break;
        case width >= 1920:
          setEndValue("-82.5%");
          break;
        case width >= 1536:
          setEndValue("-85%");
          break;
        case width >= 1440:
          setEndValue("-86%");
          break;
        case width >= 1366:
          setEndValue("-87%");
          break;
        case width >= 1280:
          setEndValue("-87.5%");
          break;
        case width >= 1024:
          setEndValue("-90%");
          break;
        default:
          setEndValue("-90%");
          break;
      }
    };

    updateEndValue();
    window.addEventListener("resize", updateEndValue);

    return () => window.removeEventListener("resize", updateEndValue);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0.45%", endValue]);

  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className={styles.aboutMe}>
        <div className={styles.containerOuter}>
          <ContainersInfo />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.aboutMe} ref={targetRef}>
      <div className={styles.containerOuter}>
        <motion.div
          style={{
            x,
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <ContainersInfo />
        </motion.div>
      </div>
    </div>
  );
};
