import styles from "./SocialLinks.module.scss";
import { SOCIAL_MEDIA } from "../../consts/socialMedia.consts";
import { SocialLink } from "../SocialLink/SocialLink";

export const SocialLinks = () => {
  const ICON_WIDTH = 25;

  return (
    <div className={styles.icons}>
      {SOCIAL_MEDIA.map(({ id, name, href, Icon }) => (
        <SocialLink key={id} label={name} href={href}>
          <Icon width={ICON_WIDTH} />
        </SocialLink>
      ))}
    </div>
  );
};
