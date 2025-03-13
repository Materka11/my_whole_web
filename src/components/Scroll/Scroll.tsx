import styles from "./Scroll.module.scss";

export const Scroll = () => {
  return (
    <div className={styles.container}>
      <span className={styles.scroll} />
      <div className={styles.scroll} />
    </div>
  );
};
