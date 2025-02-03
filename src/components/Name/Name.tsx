import styles from "./Name.module.scss";

export const Name = () => {
  return (
    <div className={styles.name}>
      <span>
        <strong>Hi, my</strong> name is <strong>Arek</strong>
      </span>
      <span className={styles.description}>
        I'm a <strong>self-taught frontend developer</strong> from Pomorskie,
        Poland.
      </span>
    </div>
  );
};
