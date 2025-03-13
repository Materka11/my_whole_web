import { ReactNode } from "react";
import styles from "./ContainerInfo.module.scss";

interface IProps {
  classContainer: string;
  title: string;
  children: ReactNode;
}

export const ContainerInfo = ({ children, classContainer, title }: IProps) => {
  return (
    <div className={`${styles.container} ${styles[classContainer]}`}>
      <h2>{title}</h2>
      <div className={styles.scrollContainer}>{children}</div>
    </div>
  );
};
