import { Category, CATEGORY } from "../../consts/category.consts";
import { sendEvent } from "../../helpers/sendEvent";
import { ClassNavType } from "../Menu/Menu";
import styles from "./DesktopMenu.module.scss";

interface IProps {
  scrollToComponent: (vh: number, px?: number) => void;
  classNav: ClassNavType;
}

export const DesktopMenu = ({ scrollToComponent, classNav }: IProps) => {
  const handleClickCategory = (category: Category) => {
    switch (category) {
      case Category.About:
        scrollToComponent(0);
        sendEvent("Forwarding", "Click", "About Me");
        break;
      case Category.Portfolio:
        scrollToComponent(2);
        sendEvent("Forwarding", "Click", "Work");
        break;
      case Category.Contact:
        scrollToComponent(3, -100);
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
        <button onClick={() => handleClickCategory(Category[name])} key={name}>
          {name}
        </button>
      ))}
    </ul>
  );
};
