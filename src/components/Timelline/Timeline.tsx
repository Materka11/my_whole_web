import { IExperience } from "../../consts/commercialExperience.consts";
import { TimelineItem } from "../TimelineItem/TimelineItem";
import styles from "./Timeline.module.scss";

interface IProps {
  data: IExperience[];
}

export const Timeline = ({ data }: IProps) => {
  const sortedData = data?.toSorted((a, b) => +a?.date - +b?.date);

  return (
    <div className={styles.timeline}>
      <div>
        {sortedData?.map((experience) => (
          <TimelineItem title={experience?.date} key={experience?.id} />
        ))}
      </div>
      <div className={styles.timelineLine} />
      <div>
        {sortedData?.map((experience) => (
          <TimelineItem {...experience} key={experience?.id} />
        ))}
      </div>
    </div>
  );
};
