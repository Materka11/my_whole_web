import "../styles/mobile/menu.css";
import { SocialLinks } from "./SocialLinks";
import { iOS } from "../helpers/ios";
import { sendEvent } from "../helpers/sendEvent";

interface MobileMenuType {
  classMenu: string;
  handleClickMenu: () => void;
  scrollToComponent: (vh: number, px?: number) => void;
}

export const MobileMenu = ({
  classMenu,
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
    <div className={`menu ${classMenu}`}>
      <div className="socialLink">
        <hr />
        <SocialLinks />
      </div>
      <ul className="link">
        <button onClick={handleClickHome}>HOME</button>
        <button onClick={handleClickAboutMe}>ABOUT ME</button>
        <button onClick={handleClickWork}>WORK</button>
        <button onClick={handleClickContact}>CONTACT</button>
      </ul>
    </div>
  );
};
