import { ReactNode } from "react";
import { sendEvent } from "../../helpers/sendEvent";

interface Props {
  children: ReactNode;
  href: string;
  label: string;
}

export const SocialLink = ({ children, href, label }: Props) => {
  return (
    <a
      href={href}
      onClick={() => sendEvent("Social Links", "Click", label)}
      aria-label={label}
    >
      {children}
    </a>
  );
};
