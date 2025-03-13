import styles from "./SocialLinks.module.scss";
import { SOCIAL_MEDIA } from "../../consts/socialMedia.consts";
import { SocialLink } from "../SocialLink/SocialLink";

interface IProps {
  iconsStyles?: string;
  iconWidth?: number;
  iconColor?: string;
}

export const SocialLinks = ({
  iconsStyles,
  iconWidth = 25,
  iconColor,
}: IProps) => {
  return (
    <div className={`${styles.icons} ${iconsStyles || ""}`}>
      <hr />
      {SOCIAL_MEDIA.map(({ id, name, href, Icon }) => (
        <SocialLink key={id} label={name} href={href}>
          <Icon width={iconWidth} color={iconColor} />
        </SocialLink>
      ))}
    </div>
  );
};
