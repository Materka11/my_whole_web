import { SocialLinks } from "../SocialLinks/SocialLinks";
import { iOS } from "../../helpers/ios";
import { sendEvent } from "../../helpers/sendEvent";
import styles from "./MobileMenu.module.scss";
import { Category, CATEGORY } from "../../consts/category.consts";

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

  const handleClickCategory = (category: Category) => {
    switch (category) {
      case Category.About:
        handleClickLink(1, aboutMeShift);
        sendEvent("Forwarding", "Click", "About me");
        break;
      case Category.Portfolio:
        handleClickLink(2, workShift);
        sendEvent("Forwarding", "Click", "Work");
        break;
      case Category.Contact:
        handleClickLink(3, contactShift);
        sendEvent("Forwarding", "Click", "Contact");
        break;
    }
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

      <div className={styles.link}>
        {CATEGORY.map((name) => (
          <button
            key={name}
            onClick={() => handleClickCategory(Category[name])}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};
