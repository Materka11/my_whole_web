import '../styles/mobile/menu.css';
import { SocialLinks } from './SocialLinks';

interface MobileMenuType {
  classMenu: string;
  handleClickMenu: () => void;
  scrollToComponent: (value: number) => void;
}

export const MobileMenu = ({
  classMenu,
  handleClickMenu,
  scrollToComponent,
}: MobileMenuType) => {
  const handleClickLink = (value: number) => {
    scrollToComponent(value);
    handleClickMenu();
  };

  return (
    <div className={`menu ${classMenu}`}>
      <div className="socialLink">
        <hr />
        <SocialLinks />
      </div>
      <ul className="link">
        <button onClick={() => handleClickMenu()}>HOME</button>
        <button onClick={() => handleClickLink(1)}>ABOUT ME</button>
        <button onClick={() => handleClickLink(2)}>WORK</button>
        <button onClick={() => handleClickLink(3)}>CONTACT</button>
      </ul>
    </div>
  );
};
