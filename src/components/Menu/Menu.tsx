import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import logoMenu from "../../assets/img/logoMenu.png";
import logo from "../../assets/img/logo.png";
import { useHasScrolled } from "../../hooks/useHasScrolled";
import { sendEvent } from "../../helpers/sendEvent";
import styles from "./Menu.module.scss";
import { MessageIcon } from "../../assets/icons/icons";

enum ClassNav {
  white = "white",
  navMenu = "navMenu",
}

type ClassNavType = keyof typeof styles;

interface Props {
  setClassNoScroll: Dispatch<SetStateAction<string>>;
  scrollToComponent: (vh: number, px?: number) => void;
}

export const Menu = ({ setClassNoScroll, scrollToComponent }: Props) => {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const [switchLogo, setSwitchLogo] = useState(logo);
  const [classNav, setClassNav] = useState<ClassNavType | "">("");

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
      }

      if (scrollAboutMeNav) {
        setSwitchLogo(logo);
        setClassNav("");
      }

      if (scrollWorkNav) {
        setSwitchLogo(logoMenu);
        setClassNav(ClassNav.white);
      }
    }
    //eslint-disable-next-line
  }, [document.documentElement.scrollTop]);

  const handleClickMenu = () => {
    if (!isToggledMenu) {
      setIsActiveMobileMenu(true);
      setIsToggledMenu(true);
      setClassNoScroll("noScroll");
      setSwitchLogo(logoMenu);
      setClassNav(ClassNav.navMenu);
    } else {
      setIsActiveMobileMenu(false);
      setIsToggledMenu(false);
      setClassNoScroll("");
      setSwitchLogo(logo);
      setClassNav("");
    }
  };

  return (
    <>
      <nav className={`${styles[classNav]} ${styles.nav}`}>
        <div className={styles.containerMenu}>
          <img className={styles.logo} src={switchLogo} alt="logo" />
          <span>
            <hr className={styles.space} />
          </span>
          <span className={styles.spanMenu} onClick={handleClickMenu}>
            <span>CLOSE</span>
            <span className={styles.menuSpan}>MENU</span>
          </span>
        </div>
        <a
          href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello"
          onClick={() => sendEvent("Email", "Click", "SAY HELLO")}
          className={styles.hello}
          aria-label="Message"
        >
          <MessageIcon
            width={25}
            styles={styles.icon}
            stroke={ClassNav.navMenu === classNav ? "#000" : "#fff"}
          />
          <span className={styles.label}>SAY HELLO</span>
        </a>
      </nav>

      <MobileMenu
        isActiveMobileMenu={isActiveMobileMenu}
        handleClickMenu={handleClickMenu}
        scrollToComponent={scrollToComponent}
      />
    </>
  );
};
