import { SocialLinks } from "../SocialLinks/SocialLinks";

import { sendEvent } from "../../helpers/sendEvent";
import styles from "./MobileMenu.module.scss";
import { Category, CATEGORY } from "../../consts/category.consts";
import { useScrollTo } from "../../hooks/useScrollTo";

interface IProps {
  isActiveMobileMenu: boolean;
  handleClickMenu: () => void;
}

export const MobileMenu = ({ isActiveMobileMenu, handleClickMenu }: IProps) => {
  const scrollTo = useScrollTo();

  const handleClickLink = (id: string) => {
    handleClickMenu();
    scrollTo({ elementId: id });
  };

  const handleClickCategory = (category: Category) => {
    switch (category) {
      case Category.About:
        handleClickLink("aboutMe");
        sendEvent("Forwarding", "Click", "About me");
        break;
      case Category.Portfolio:
        handleClickLink("work");
        sendEvent("Forwarding", "Click", "Work");
        break;
      case Category.Contact:
        handleClickLink("form");
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
