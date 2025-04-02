import { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.scss";
import { Menu } from "../../components/Menu/Menu";
import { Bust } from "../../components/Bust/Bust";
import { Name } from "../../components/Name/Name";
import { Scroll } from "../../components/Scroll/Scroll";
import { SocialLinks } from "../../components/SocialLinks/SocialLinks";

interface Props {
  setClassNoScroll: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setClassNoScroll }: Props) => {
  return (
    <div className={styles.header}>
      <Menu setClassNoScroll={setClassNoScroll} />
      <section className={styles.content}>
        <Name />
        <Scroll />
        <Bust />
        <div className={styles.desktopSocial}>
          <SocialLinks
            iconsStyles={styles.icons}
            iconWidth={30}
            iconColor="#FFFFFF"
          />
        </div>
      </section>
    </div>
  );
};
