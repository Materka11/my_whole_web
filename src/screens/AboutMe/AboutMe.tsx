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
          setEndValue("-90%");
          break;
        case width >= 1920:
          setEndValue("-91%");
          break;
        case width >= 1536:
          setEndValue("-91.75%");
          break;
        case width >= 1440:
          setEndValue("-92%");
          break;
        case width >= 1366:
          setEndValue("-92.5%");
          break;
        case width >= 1280:
          setEndValue("-93%");
          break;
        case width >= 1024:
          setEndValue("-95%");
          break;
        default:
          setEndValue("-95%");
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
      <div className={styles.aboutMe} id="aboutMe">
        <div className={styles.containerOuter}>
          <ContainersInfo />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.aboutMe} ref={targetRef} id="aboutMe">
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
