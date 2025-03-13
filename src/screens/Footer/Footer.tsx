import { SocialLinks } from "../../components/SocialLinks/SocialLinks";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <div className={styles.footer}>
    <SocialLinks iconsStyles={styles.icons} iconColor="#FFF" iconWidth={32} />
    <span>© Arkadiusz Materka 2022</span>
  </div>
);
