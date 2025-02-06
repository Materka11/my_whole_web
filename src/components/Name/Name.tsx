import styles from "./Name.module.scss";

export const Name = () => {
  return (
    <div className={styles.name}>
      <span>
        <strong>Hi, </strong> I'm <strong>Arek</strong>
      </span>
      <span className={styles.description}>
        I'm a <strong>self-taught frontend developer</strong> from Pomorskie,
        Poland.
      </span>
    </div>
  );
};
