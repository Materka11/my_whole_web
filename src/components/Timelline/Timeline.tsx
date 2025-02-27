import { useEffect, useRef, useState } from "react";
import { IExperience } from "../../consts/commercialExperience.consts";
import { TimelineItem } from "../TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

interface IProps {
  data: IExperience[];
}

export const Timeline = ({ data }: IProps) => {
  const sortedData = data?.toSorted((a, b) => +a?.date - +b?.date);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const { left, width } = timelineRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      const scrollProgress = Math.min(
        Math.max(((windowWidth - left) / width) * 100, 0),
        100
      );

      setProgress(scrollProgress >= 99 ? scrollProgress : scrollProgress - 5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (idx: number) =>
    progress >= (idx / sortedData.length) * 100 + 1.5;

  return (
    <div className={styles.timeline} ref={timelineRef}>
      <div>
        {sortedData?.map((experience, index) => (
          <div className={styles.timelineItemWrapper} key={experience?.id}>
            <TimelineItem title={experience?.date} isActive={isActive(index)} />
            <div
              className={`${styles.timelineSide} ${
                isActive(index) ? styles.active : ""
              }`}
            />
          </div>
        ))}
      </div>

      <div className={styles.timelineLine}>
        <div
          className={styles.timelineFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div>
        {sortedData?.map((experience, index) => (
          <TimelineItem
            {...experience}
            key={experience?.id}
            isActive={isActive(index)}
          />
        ))}
      </div>
    </div>
  );
};
