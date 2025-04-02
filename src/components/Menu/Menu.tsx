import { useState, useEffect, Dispatch, SetStateAction } from "react";
import logoMenu from "../../assets/img/logoMenu.png";
import logo from "../../assets/img/logo.png";
import { useHasScrolledToElementById } from "../../hooks/useHasScrolledToElementById";
import styles from "./Menu.module.scss";
import { ContainerLogoMenu } from "../ContainerLogoMenu/ContainerLogoMenu";
import { HelloMessage } from "../HelloMessage/HelloMessage";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";
import { Category } from "../../consts/category.consts";

export enum ClassNav {
  white = "white",
  navMenu = "navMenu",
}

export type ClassNavType = keyof typeof styles;

interface IProps {
  setClassNoScroll: Dispatch<SetStateAction<string>>;
}

export const Menu = ({ setClassNoScroll }: IProps) => {
  const [switchLogo, setSwitchLogo] = useState(logo);
  const [classNav, setClassNav] = useState<ClassNavType | "">("");
  const [activeButton, setActiveButton] = useState(Category.About);

  const scrollAboutMeNav = useHasScrolledToElementById(0, "aboutMe");
  const scrollWorkNav = useHasScrolledToElementById(0, "work");
  const scrollFormkNav = useHasScrolledToElementById(0, "form");

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth >= 1440) {
      if (scrollAboutMeNav) {
        setSwitchLogo(logoMenu);
        setClassNav(ClassNav.white);
        setActiveButton(Category.About);
      } else if (!scrollAboutMeNav) {
        setSwitchLogo(logo);
        setClassNav("");
        setActiveButton(Category.About);
      }

      if (scrollWorkNav) {
        setSwitchLogo(logo);
        setClassNav("");
        setActiveButton(Category.Portfolio);
      }

      if (scrollFormkNav) {
        setSwitchLogo(logoMenu);
        setClassNav(ClassNav.white);
        setActiveButton(Category.Contact);
      }
    }
    //eslint-disable-next-line
  }, [document.documentElement.scrollTop]);

  return (
    <nav
      className={`${styles[classNav] ? styles[classNav] : ""} ${styles.nav}`}
    >
      <ContainerLogoMenu
        switchLogo={switchLogo}
        setClassNav={setClassNav}
        setClassNoScroll={setClassNoScroll}
        setSwitchLogo={setSwitchLogo}
      />
      <DesktopMenu classNav={classNav} activeButton={activeButton} />
      <HelloMessage classNav={classNav} />
    </nav>
  );
};
