import styles from "./AboutMe.module.scss";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMobile } from "../../hooks/useMobile";
import ContainersInfo from "../../components/ContainersInfo";

export const AboutMe = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className={styles.aboutMe}>
        <div className={styles.containerOuter}>{/* <ContainersInfo /> */}</div>
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
          {/* <ContainersInfo /> */}
        </motion.div>
      </div>
    </div>
  );
};
