import React from 'react';

import '../styles/mobile/footer.css';

import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
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
      <span>© Arkadiusz Materka 2022</span>
    </div>
  );
}

export default Footer;
