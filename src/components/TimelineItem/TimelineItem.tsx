import styles from "./TimelineItem.module.scss";

interface IProps {
  title: string;
  content?: string;
}

export const TimelineItem = ({ title, content }: IProps) => {
  return (
    <article
      className={`${styles.timelineItem} ${
        !title && !content ? styles.empty : ""
      }`}
    >
      <h4>{title}</h4>
      {content && <p>{content}</p>}
    </article>
  );
};
