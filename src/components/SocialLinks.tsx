import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import '../styles/mobile/menu.css';

export const SocialLinks = () => (
  <div className="icons">
    <a href="https://github.com/materka11" className="icon">
      <BsGithub />
    </a>
    <a href="https://www.facebook.com/arkadiusz.materka" className="icon">
      <BsFacebook />
    </a>
    <a href="https://www.instagram.com/materka_144/" className="icon">
      <BsInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/arkadiusz-materka-738372242/"
      className="icon"
    >
      <BsLinkedin />
    </a>
  </div>
);
