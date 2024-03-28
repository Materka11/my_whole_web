import "../styles/mobile/menu.css";
import { SocialLinks } from "./SocialLinks";
import { iOS } from "../helpers/ios";

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
  const handleClickLink = (vh: number, px?: number) => {
    scrollToComponent(vh, px);
    handleClickMenu();
  };

  const isIOS = iOS();

  const aboutMeShift = isIOS ? -10 : -100;
  const workShift = isIOS ? 90 : -100;
  const contactShift = isIOS ? 120 : -135;

  return (
    <div className={`menu ${classMenu}`}>
      <div className="socialLink">
        <hr />
        <SocialLinks />
      </div>
      <ul className="link">
        <button onClick={() => handleClickMenu()}>HOME</button>
        <button onClick={() => handleClickLink(1, aboutMeShift)}>
          ABOUT ME
        </button>
        <button onClick={() => handleClickLink(2, workShift)}>WORK</button>
        <button onClick={() => handleClickLink(3, contactShift)}>
          CONTACT
        </button>
      </ul>
    </div>
  );
};
