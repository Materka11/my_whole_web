import styles from "./ContainerLogoMenu.module.scss";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Dispatch, SetStateAction, useState } from "react";
import logoMenu from "../../assets/img/logoMenu.png";
import logo from "../../assets/img/logo.png";
import { ClassNav } from "../Menu/Menu";

interface IProps {
  switchLogo: string;
  setClassNoScroll: Dispatch<SetStateAction<string>>;
  setSwitchLogo: Dispatch<SetStateAction<string>>;
  setClassNav: Dispatch<SetStateAction<string | number>>;
}

export const ContainerLogoMenu = ({
  switchLogo,
  setClassNoScroll,
  setSwitchLogo,
  setClassNav,
}: IProps) => {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const [isToggledMenu, setIsToggledMenu] = useState(false);

  const handleClickMenu = () => {
    if (!isToggledMenu) {
      setIsActiveMobileMenu(true);
      setIsToggledMenu(true);
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
      <div className={styles.containerMenu}>
        <img className={styles.logo} src={switchLogo} alt="logo" />
        <span className={styles.spaceContainer}>
          <hr className={styles.space} />
        </span>
        <span className={styles.spanMenu} onClick={handleClickMenu}>
          <span>CLOSE</span>
          <span className={styles.menuSpan}>MENU</span>
        </span>
      </div>

      <MobileMenu
        isActiveMobileMenu={isActiveMobileMenu}
        handleClickMenu={handleClickMenu}
      />
    </>
  );
};
