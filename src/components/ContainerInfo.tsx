import { ReactNode } from "react";
import "../styles/mobile/aboutMe.css";
import "../styles/desktop/aboutMe.css";

interface Props {
  classContainer: string;
  title: string;
  children: ReactNode;
}

const ContainerInfo = ({ classContainer, title, children }: Props) => (
  <div className={`container ${classContainer}`}>
    <h2>{title}</h2>
    <div className="scrollContainer">{children}</div>
  </div>
);

export default ContainerInfo;
