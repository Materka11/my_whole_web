import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.ring} ${styles.r01}`} />
      <div className={`${styles.ring} ${styles.r02}`} />
      <div className={`${styles.ring} ${styles.r03}`} />
      <div className={`${styles.ring} ${styles.r04}`} />
      <div className={`${styles.ring} ${styles.r051}`} />
      <div className={`${styles.ring} ${styles.r052}`} />
      <div className={`${styles.ring} ${styles.r06}`} />
      <div className={`${styles.ring} ${styles.r07}`} />
      <div className={`${styles.ring} ${styles.r08}`} />
      <div className={`${styles.ring} ${styles.r09}`} />
    </div>
  );
};

export default Loader;
