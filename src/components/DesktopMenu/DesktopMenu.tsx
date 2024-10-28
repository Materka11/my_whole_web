import { Category, CATEGORY } from "../../consts/category.consts";
import { sendEvent } from "../../helpers/sendEvent";
import styles from "./DesktopMenu.module.scss";

interface IProps {
  scrollToComponent: (vh: number, px?: number) => void;
}

export const DesktopMenu = ({ scrollToComponent }: IProps) => {
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
    <ul className={styles.desktopMenu}>
      {CATEGORY.map((name) => (
        <button onClick={() => handleClickCategory(Category[name])} key={name}>
          {name}
        </button>
      ))}
    </ul>
  );
};
