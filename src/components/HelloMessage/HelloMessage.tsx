import { MessageIcon } from "../../assets/icons/icons";
import styles from "./HelloMessage.module.scss";
import { sendEvent } from "../../helpers/sendEvent";
import { ClassNav } from "../Menu/Menu";

interface IProps {
  classNav: string | number;
}

export const HelloMessage = ({ classNav }: IProps) => {
  return (
    <a
      href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello"
      onClick={() => sendEvent("Email", "Click", "SAY HELLO")}
      className={styles.hello}
      aria-label="Message"
    >
      <MessageIcon
        width={25}
        styles={styles.icon}
        stroke={ClassNav.navMenu === classNav ? "#000" : "#fff"}
      />
      <span className={styles.label}>SAY HELLO</span>
    </a>
  );
};
