import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import "../styles/mobile/menu.css";
import { sendEvent } from "../helpers/sendEvent";
import { IoLogoGitlab } from "react-icons/io5";

export const SocialLinks = () => (
  <div className="icons">
    <a
      href="https://github.com/materka11"
      className="icon"
      onClick={() => sendEvent("Social Links", "Click", "Github")}
      aria-label="My github"
    >
      <BsGithub />
    </a>
    <a
      href="https://gitlab.com/materka111"
      className="icon"
      onClick={() => sendEvent("Social Links", "Click", "GitLab")}
      aria-label="My gitlab"
    >
      <IoLogoGitlab />
    </a>
    <a
      href="https://www.facebook.com/arkadiusz.materka"
      className="icon"
      onClick={() => sendEvent("Social Links", "Click", "Facebook")}
      aria-label="My facebook"
    >
      <BsFacebook />
    </a>
    <a
      href="https://www.instagram.com/soldier_wikary/"
      className="icon"
      onClick={() => sendEvent("Social Links", "Click", "Instagram")}
      aria-label="My instagram"
    >
      <BsInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/arkadiusz-materka-738372242/"
      className="icon"
      onClick={() => sendEvent("Social Links", "Click", "Linkedin")}
      aria-label="My linkedin"
    >
      <BsLinkedin />
    </a>
  </div>
);
