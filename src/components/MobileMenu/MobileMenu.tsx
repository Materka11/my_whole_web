import { SocialLinks } from "../SocialLinks/SocialLinks";
import { iOS } from "../../helpers/ios";
import { sendEvent } from "../../helpers/sendEvent";
import styles from "./MobileMenu.module.scss";

interface MobileMenuType {
  isActiveMobileMenu: boolean;
  handleClickMenu: () => void;
  scrollToComponent: (vh: number, px?: number) => void;
}

export const MobileMenu = ({
  isActiveMobileMenu,
  handleClickMenu,
  scrollToComponent,
}: MobileMenuType) => {
  const isIOS = iOS();

  const aboutMeShift = isIOS ? -10 : -100;
  const workShift = isIOS ? 90 : -100;
  const contactShift = isIOS ? 120 : -135;

  const handleClickLink = (vh: number, px?: number) => {
    scrollToComponent(vh, px);
    handleClickMenu();
  };

  const handleClickHome = () => {
    handleClickMenu();
    sendEvent("Forwarding", "Click", "Home");
  };

  const handleClickAboutMe = () => {
    handleClickLink(1, aboutMeShift);
    sendEvent("Forwarding", "Click", "About me");
  };

  const handleClickWork = () => {
    handleClickLink(2, workShift);
    sendEvent("Forwarding", "Click", "Work");
  };

  const handleClickContact = () => {
    handleClickLink(3, contactShift);
    sendEvent("Forwarding", "Click", "Contact");
  };

  return (
    <div
      className={`${styles.menu} ${
        isActiveMobileMenu ? styles.active : styles.inactive
      }`}
    >
      <div className={styles.socialLink}>
        <hr />
        <SocialLinks />
      </div>
      {/*  <div className="link">
        <button onClick={handleClickHome}>HOME</button>
        <button onClick={handleClickAboutMe}>ABOUT ME</button>
        <button onClick={handleClickWork}>WORK</button>
        <button onClick={handleClickContact}>CONTACT</button>
      </div> */}
    </div>
  );
};
