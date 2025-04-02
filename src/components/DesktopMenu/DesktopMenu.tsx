import { Category, CATEGORY } from "../../consts/category.consts";
import { sendEvent } from "../../helpers/sendEvent";
import { useScrollTo } from "../../hooks/useScrollTo";
import { ClassNavType } from "../Menu/Menu";
import styles from "./DesktopMenu.module.scss";

interface IProps {
  classNav: ClassNavType;
  activeButton: string;
}

export const DesktopMenu = ({ classNav, activeButton }: IProps) => {
  const scrollTo = useScrollTo();

  const handleClickCategory = (category: Category) => {
    switch (category) {
      case Category.About:
        scrollTo({ elementId: "aboutMe" });
        sendEvent("Forwarding", "Click", "About Me");
        break;
      case Category.Portfolio:
        scrollTo({ elementId: "work" });
        sendEvent("Forwarding", "Click", "Work");
        break;
      case Category.Contact:
        scrollTo({ elementId: "form" });
        sendEvent("Forwarding", "Click", "Contact");
        break;
    }
  };

  return (
    <ul
      className={`${styles.desktopMenu} ${
        classNav ? styles.desktopMenuWhite : ""
      }`}
    >
      {CATEGORY.map((name) => (
        <li key={name}>
          <button
            onClick={() => handleClickCategory(Category[name])}
            className={activeButton === name ? styles.active : ""}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
