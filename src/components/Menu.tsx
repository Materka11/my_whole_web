import { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';
import logoMenu from '../assets/img/logoMenu.png';
import logo from '../assets/img/logo.png';
import { FiMessageCircle } from 'react-icons/fi';
import { useHasScrolled } from '../hooks/useHasScrolled';

interface MenuType {
  setClassNoScroll: React.Dispatch<React.SetStateAction<string>>;
  scrollToComponent: (value: number) => void;
}

export const Menu = ({ setClassNoScroll, scrollToComponent }: MenuType) => {
  const [classMenu, setClassMenu] = useState('inactive');
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  const [switchLogo, setSwitchLogo] = useState(logo);
  const [classNav, setClassNav] = useState('');
  const scrollHeaderNav = useHasScrolled(454);
  const scrollAboutMeNav = useHasScrolled(684);
  const scrollWorkNav = useHasScrolled(940);

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth >= 1440) {
      if (scrollHeaderNav) {
        setSwitchLogo(logoMenu);
        setClassNav('white');
      } else if (!scrollHeaderNav) {
        setSwitchLogo(logo);
        setClassNav('');
      }

      if (scrollAboutMeNav) {
        setSwitchLogo(logo);
        setClassNav('');
      }

      if (scrollWorkNav) {
        setSwitchLogo(logoMenu);
        setClassNav('white');
      }
    }
  }, [document.documentElement.scrollTop]);

  const handleClickMenu = () => {
    if (!isToggledMenu) {
      setClassMenu('active');
      setIsToggledMenu(true);
      setClassNoScroll('noScroll');
      setSwitchLogo(logoMenu);
      setClassNav('navMenu');
    } else {
      setClassMenu('inactive');
      setIsToggledMenu(false);
      setClassNoScroll('');
      setSwitchLogo(logo);
      setClassNav('');
    }
  };

  return (
    <>
      <nav className={classNav}>
        <img src={switchLogo} alt="logo" />
        <hr />
        <span className="spanMenu" onClick={handleClickMenu}>
          <span className="spanLink">CLOSE</span>
          <span className="spanLink menuSpan">MENU</span>
        </span>
        <FiMessageCircle className="icon" />
        <a href="mailto:arekmaterka11@gmail.com?subject=Hi Arek, I'd like to say hello">
          SAY HELLO
        </a>
      </nav>
      <MobileMenu
        classMenu={classMenu}
        handleClickMenu={handleClickMenu}
        scrollToComponent={scrollToComponent}
      />
    </>
  );
};
