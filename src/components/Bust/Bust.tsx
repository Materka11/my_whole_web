import { useState, useEffect, useRef } from "react";
import styles from "./Bust.module.scss";

export const Bust = () => {
  const [xEye, setXEye] = useState("");
  const [yEye, setYEye] = useState("");
  const [xHead, setXHead] = useState(0);
  const [yHead, setYHead] = useState(0);
  const [rotXHead, setRotXHead] = useState(0);
  const [rotYHead, setRotYHead] = useState(0);

  const eyesRef = useRef(null);

  useEffect(() => {
    const update = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;

      if (innerWidth >= 1440) {
        setXEye((clientX * 100) / innerWidth + "%");
        setYEye((clientY * 100) / innerHeight + "%");

        setXHead((xHead) => xHead + (clientX - xHead) * 0.15);
        setYHead((yHead) => yHead + (clientY - yHead) * 0.15);
        setRotXHead((xHead / innerWidth) * -2 + 1);
        setRotYHead((yHead / innerHeight) * 2 - 1);
      }
    };
    window.addEventListener("mousemove", update);

    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [xEye, xHead, yEye, yHead]);

  const styleHead = {
    transform:
      "rotateX(calc(-15deg * " +
      rotXHead +
      "))  rotateY(calc(-15deg * " +
      rotYHead +
      ")) translate(-50%, 0)",
  };

  const styleShadow = {
    boxShadow: `${rotXHead * 50}px ${
      rotYHead * -50
    }px 20px 0px rgba(66, 68, 90, 0.50)`,
  };

  const styleEyes = {
    left: xEye,
    top: yEye,
    transform: `translate(-${xEye}, -${yEye})`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.bust}>
        <div style={styleHead} className={styles.head}>
          <div style={styleShadow} className={styles.hair} />
          <div className={styles.face}>
            <div className={`${styles.eyebrows} ${styles.left}`} />
            <div className={`${styles.eyebrows} ${styles.right}`} />
            <div className={`${styles.eyes} ${styles.left}`}>
              <div ref={eyesRef} style={styleEyes} className={styles.ball} />
            </div>
            <div className={`${styles.eyes} ${styles.right}`}>
              <div ref={eyesRef} style={styleEyes} className={styles.ball} />
            </div>
            <div className={`${styles.lowerEyelid} ${styles.left}`} />
            <div className={`${styles.lowerEyelid} ${styles.right}`} />
            <div className={styles.nose} />
            <div className={styles.mouth} />
          </div>
          <div className={`${styles.ears} ${styles.left}`}>
            <div className={styles.line} />
          </div>
          <div className={`${styles.ears} ${styles.right}`}>
            <div className={styles.line} />
          </div>
          <div className={`${styles.neck} ${styles.left}`} />
          <div className={`${styles.neck} ${styles.right}`} />
          <div
            style={styleShadow}
            className={`${styles.face} ${styles.shadow}`}
          />
          <div style={styleShadow} className={styles.body} />
        </div>
      </div>
    </div>
  );
};
