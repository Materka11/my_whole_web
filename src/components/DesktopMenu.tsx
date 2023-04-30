import { useState, useEffect } from 'react';
import { useHasScrolled } from '../hooks/useHasScrolled';

interface DesktopMenuType {
  scrollToComponent: (value: number) => void;
}

export const DesktopMenu = ({ scrollToComponent }: DesktopMenuType) => {
  const [classDotHome, setClassDotHome] = useState('dot scrollDot');
  const [classLineHome, setClassLineHome] = useState('line');
  const [classButtonHome, setClassButtonHome] = useState('');

  const [classDotAboutMe, setClassDotAboutMe] = useState('dot');
  const [classLineAboutMe, setClassLineAboutMe] = useState('line');
  const [classButtonAboutMe, setClassButtonAboutMe] = useState('');

  const [classDotWork, setClassDotWork] = useState('dot');
  const [classLineWork, setClassLineWork] = useState('line');
  const [classButtonWork, setClassButtonWork] = useState('');

  const [classDotContact, setClassDotContact] = useState('dot');
  const [classLineContact, setClassLineContact] = useState('line');
  const [classButtonContact, setClassButtonContact] = useState('');

  //between header and about me
  const scrollHeaderHome = useHasScrolled(276);
  const scrollHeaderAboutMe = useHasScrolled(265);
  const scrollHeaderWork = useHasScrolled(252);
  const scrollHeaderContact = useHasScrolled(240);

  //between about me and work
  const scrollAboutMeHome = useHasScrolled(533);
  const scrollAboutMeAboutMe = useHasScrolled(523);
  const scrollAboutMeWork = useHasScrolled(510);
  const scrollAboutMeContact = useHasScrolled(498);

  //between work and contact
  const scrollWorkHome = useHasScrolled(761);
  const scrollWorkAboutMe = useHasScrolled(750);
  const scrollWorkWork = useHasScrolled(737);
  const scrollWorkContact = useHasScrolled(725);

  //between contact and footer
  const scrollContactHome = useHasScrolled(988);
  const scrollContactAboutMe = useHasScrolled(977);
  const scrollContactWork = useHasScrolled(964);
  const scrollContactContact = useHasScrolled(952);

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth >= 1440) {
      //between header and about me
      if (scrollHeaderHome) {
        setClassDotHome('dot colorDot');
        setClassLineHome('line colorLine');
        setClassButtonHome('colorButton');
      } else if (!scrollHeaderHome) {
        setClassDotHome('dot scrollDot');
        setClassLineHome('line');
        setClassButtonHome('');
      }

      if (scrollHeaderAboutMe) {
        setClassDotAboutMe('dot scrollDotColor');
        setClassLineAboutMe('line colorLine');
        setClassButtonAboutMe('colorButton');
      } else if (!scrollHeaderAboutMe) {
        setClassDotAboutMe('dot');
        setClassLineAboutMe('line ');
        setClassButtonAboutMe('');
      }

      if (scrollHeaderWork) {
        setClassDotWork('dot colorDot');
        setClassLineWork('line colorLine');
        setClassButtonWork('colorButton');
      } else if (!scrollHeaderAboutMe) {
        setClassDotWork('dot');
        setClassLineWork('line ');
        setClassButtonWork('');
      }

      if (scrollHeaderContact) {
        setClassDotContact('dot colorDot');
        setClassLineContact('line colorLine');
        setClassButtonContact('colorButton');
      } else if (!scrollHeaderContact) {
        setClassDotContact('dot');
        setClassLineContact('line ');
        setClassButtonContact('');
      }

      //between about me and work
      if (scrollAboutMeHome) {
        setClassDotHome('dot');
        setClassLineHome('line');
        setClassButtonHome('');
      }

      if (scrollAboutMeAboutMe) {
        setClassDotAboutMe('dot');
        setClassLineAboutMe('line');
        setClassButtonAboutMe('');
      }

      if (scrollAboutMeWork) {
        setClassDotWork('dot scrollDot');
        setClassLineWork('line');
        setClassButtonWork('');
      }

      if (scrollAboutMeContact) {
        setClassDotContact('dot');
        setClassLineContact('line');
        setClassButtonContact('');
      }

      //between work and contact
      if (scrollWorkHome) {
        setClassDotHome('dot colorDot');
        setClassLineHome('line colorLine');
        setClassButtonHome('colorButton');
      }

      if (scrollWorkAboutMe) {
        setClassDotAboutMe('dot colorDot');
        setClassLineAboutMe('line colorLine');
        setClassButtonAboutMe('colorButton');
      }

      if (scrollWorkWork) {
        setClassDotWork('dot colorDot');
        setClassLineWork('line colorLine');
        setClassButtonWork('colorButton');
      }

      if (scrollWorkContact) {
        setClassDotContact('dot scrollDotColor');
        setClassLineContact('line colorLine');
        setClassButtonContact('colorButton');
      }

      //between contact and footer
      if (scrollContactHome) {
        setClassDotHome('dot');
        setClassLineHome('line');
        setClassButtonHome('');
      }

      if (scrollContactAboutMe) {
        setClassDotAboutMe('dot');
        setClassLineAboutMe('line');
        setClassButtonAboutMe('');
      }

      if (scrollContactWork) {
        setClassDotWork('dot');
        setClassLineWork('line');
        setClassButtonWork('');
      }

      if (scrollContactContact) {
        setClassDotContact('dot');
        setClassLineContact('line');
        setClassButtonContact('');
      }
    }
  }, [document.documentElement.scrollTop]);

  return (
    <div className="menuDesktop">
      <span className="headerMenu">MENU</span>
      <div className="menuDesktopFixed">
        <div className="subMenu">
          <div className={classDotHome} />
          <div className={classLineHome} />
          <button
            className={classButtonHome}
            onClick={() => scrollToComponent(0 - 100)}
          >
            Home
          </button>
        </div>
        <div className="subMenu">
          <div className={classDotAboutMe} />
          <div className={classLineAboutMe} />
          <button
            className={classButtonAboutMe}
            onClick={() => scrollToComponent(1)}
          >
            About Me
          </button>
        </div>
        <div className="subMenu">
          <div className={classDotWork} />
          <div className={classLineWork} />
          <button
            className={classButtonWork}
            onClick={() => scrollToComponent(2)}
          >
            Work
          </button>
        </div>
        <div className="subMenu">
          <div className={classDotContact} />
          <div className={classLineContact} />
          <button
            className={classButtonContact}
            onClick={() => scrollToComponent(3)}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
