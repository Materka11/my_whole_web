import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import logoMenu from "../../assets/img/logoMenu.png";
import logo from "../../assets/img/logo.png";
import { FiMessageCircle } from "react-icons/fi";
import { useHasScrolled } from "../../hooks/useHasScrolled";
import { sendEvent } from "../../helpers/sendEvent";

interface MenuType {
  setClassNoScroll: Dispatch<SetStateAction<string>>;
  scrollToComponent: (vh: number, px?: number) => void;
}

export const Menu = ({ setClassNoScroll, scrollToComponent }: MenuType) => {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(true);
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const [switchLogo, setSwitchLogo] = useState(logo);
  const [classNav, setClassNav] = useState("");

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
        setClassNav("white");
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
        setClassNav("white");
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
      setClassNav("navMenu");
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
      {/* <nav className={classNav}>
        <img src={switchLogo} alt="logo" />
        <hr />
        <span className="spanMenu" onClick={handleClickMenu}>
          <span className="spanLink">CLOSE</span>
          <span className="spanLink menuSpan">MENU</span>
        </span>
        <FiMessageCircle className="icon" />
        <a
          href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello"
          onClick={() => sendEvent("Email", "Click", "SAY HELLO")}
        >
          SAY HELLO
        </a>
      </nav>
      */}
      <MobileMenu
        isActiveMobileMenu={isActiveMobileMenu}
        handleClickMenu={handleClickMenu}
        scrollToComponent={scrollToComponent}
      />
    </>
  );
};
