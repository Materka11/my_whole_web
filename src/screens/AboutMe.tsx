import "../styles/mobile/aboutMe.css";
import "../styles/desktop/aboutMe.css";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMobile } from "../hooks/useMobile";
import ContainersInfo from "../components/ContainersInfo";

export const AboutMe = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className="aboutMe">
        <div className="containerOuter">
          <ContainersInfo />
        </div>
      </div>
    );
  }

  return (
    <div className="aboutMe" ref={targetRef}>
      <div className="containerOuter">
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
