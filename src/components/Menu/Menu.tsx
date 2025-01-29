import { useState, useEffect, Dispatch, SetStateAction } from "react";
import logoMenu from "../../assets/img/logoMenu.png";
import logo from "../../assets/img/logo.png";
import { useHasScrolled } from "../../hooks/useHasScrolled";
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
  scrollToComponent: (vh: number, px?: number) => void;
}

export const Menu = ({ setClassNoScroll, scrollToComponent }: IProps) => {
  const [switchLogo, setSwitchLogo] = useState(logo);
  const [classNav, setClassNav] = useState<ClassNavType | "">("");
  const [activeButton, setActiveButton] = useState(Category.About);

  const POINT_OF_HEADER = 294;
  const POINT_OF_ABOUT_ME = 784;
  const POINT_OF_WORK = 940;

  const scrollHeaderNav = useHasScrolled(POINT_OF_HEADER);
  const scrollAboutMeNav = useHasScrolled(POINT_OF_ABOUT_ME);
  const scrollWorkNav = useHasScrolled(POINT_OF_WORK);

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth >= 1440) {
      if (scrollHeaderNav) {
        setSwitchLogo(logoMenu);
        setClassNav(ClassNav.white);
      } else if (!scrollHeaderNav) {
        setSwitchLogo(logo);
        setClassNav("");
        setActiveButton(Category.About);
      }

      if (scrollAboutMeNav) {
        setSwitchLogo(logo);
        setClassNav("");
        setActiveButton(Category.Portfolio);
      }

      if (scrollWorkNav) {
        setSwitchLogo(logoMenu);
        setClassNav(ClassNav.white);
        setActiveButton(Category.Contact);
      }
    }
    //eslint-disable-next-line
  }, [document.documentElement.scrollTop]);

  return (
    <>
      <nav
        className={`${styles[classNav] ? styles[classNav] : ""} ${styles.nav}`}
      >
        <ContainerLogoMenu
          switchLogo={switchLogo}
          scrollToComponent={scrollToComponent}
          setClassNav={setClassNav}
          setClassNoScroll={setClassNoScroll}
          setSwitchLogo={setSwitchLogo}
        />
        <DesktopMenu
          scrollToComponent={scrollToComponent}
          classNav={classNav}
          activeButton={activeButton}
        />
        <HelloMessage classNav={classNav} />
      </nav>
    </>
  );
};
