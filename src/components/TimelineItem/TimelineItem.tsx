import styles from "./TimelineItem.module.scss";

interface IProps {
  title: string;
  content?: string;
  isActive?: boolean;
}

export const TimelineItem = ({ title, content, isActive }: IProps) => {
  return (
    <article
      className={`${styles.timelineItem} ${
        !title && !content ? styles.empty : ""
      } ${isActive && title ? styles.active : ""}`}
    >
      <h4>{title}</h4>
      {content && <p>{content}</p>}
    </article>
  );
};
