import { useState, useEffect } from "react";
import { useHasScrolled } from "../hooks/useHasScrolled";
import { sendEvent } from "../helpers/sendEvent";

interface DesktopMenuType {
  scrollToComponent: (vh: number, px?: number) => void;
}

export const DesktopMenu = ({ scrollToComponent }: DesktopMenuType) => {
  const [classesHome, setClassesHome] = useState({
    dot: "dot scrollDot",
    line: "line",
    button: "",
  });
  const [classesAboutMe, setClassesAboutMe] = useState({
    dot: "dot",
    line: "line",
    button: "",
  });
  const [classesWork, setClassesWork] = useState({
    dot: "dot",
    line: "line",
    button: "",
  });
  const [classesContact, setClassesContact] = useState({
    dot: "dot",
    line: "line",
    button: "",
  });

  //between header and about me
  const scrollHeaderHome = useHasScrolled(186);
  const scrollHeaderAboutMe = useHasScrolled(178);
  const scrollHeaderWork = useHasScrolled(170);
  const scrollHeaderContact = useHasScrolled(162);

  //between about me and work
  const scrollAboutMeHome = useHasScrolled(676);
  const scrollAboutMeAboutMe = useHasScrolled(668);
  const scrollAboutMeWork = useHasScrolled(660);
  const scrollAboutMeContact = useHasScrolled(652);

  //between work and contact
  const scrollWorkHome = useHasScrolled(831);
  const scrollWorkAboutMe = useHasScrolled(823);
  const scrollWorkWork = useHasScrolled(815);
  const scrollWorkContact = useHasScrolled(807);

  //between contact and footer
  const scrollContactHome = useHasScrolled(991);
  const scrollContactAboutMe = useHasScrolled(986);
  const scrollContactWork = useHasScrolled(980);
  const scrollContactContact = useHasScrolled(974);

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth >= 1440) {
      //between header and about me
      if (scrollHeaderHome) {
        setClassesHome({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      } else if (!scrollHeaderHome) {
        setClassesHome({
          dot: "dot scrollDot",
          line: "line",
          button: "",
        });
      }

      if (scrollHeaderAboutMe) {
        setClassesAboutMe({
          dot: "dot scrollDotColor",
          line: "line colorLine",
          button: "colorButton",
        });
      } else if (!scrollHeaderAboutMe) {
        setClassesAboutMe({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollHeaderWork) {
        setClassesWork({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      } else if (!scrollHeaderAboutMe) {
        setClassesWork({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollHeaderContact) {
        setClassesContact({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      } else if (!scrollHeaderContact) {
        setClassesContact({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      //between about me and work
      if (scrollAboutMeHome) {
        setClassesHome({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollAboutMeAboutMe) {
        setClassesAboutMe({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollAboutMeWork) {
        setClassesWork({
          dot: "dot scrollDot",
          line: "line",
          button: "",
        });
      }

      if (scrollAboutMeContact) {
        setClassesContact({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      //between work and contact
      if (scrollWorkHome) {
        setClassesHome({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      }

      if (scrollWorkAboutMe) {
        setClassesAboutMe({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      }

      if (scrollWorkWork) {
        setClassesWork({
          dot: "dot colorDot",
          line: "line colorLine",
          button: "colorButton",
        });
      }

      if (scrollWorkContact) {
        setClassesContact({
          dot: "dot scrollDotColor",
          line: "line colorLine",
          button: "colorButton",
        });
      }

      //between contact and footer
      if (scrollContactHome) {
        setClassesHome({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollContactAboutMe) {
        setClassesAboutMe({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollContactWork) {
        setClassesWork({
          dot: "dot",
          line: "line",
          button: "",
        });
      }

      if (scrollContactContact) {
        setClassesContact({
          dot: "dot",
          line: "line",
          button: "",
        });
      }
    }
    //eslint-disable-next-line
  }, [document.documentElement.scrollTop]);

  const handleClickHome = () => {
    scrollToComponent(0 - 100);
    sendEvent("Forwarding", "Click", "Home");
  };

  const handleClickAboutMe = () => {
    scrollToComponent(1);
    sendEvent("Forwarding", "Click", "About Me");
  };

  const handleClickWork = () => {
    scrollToComponent(4, 50);
    sendEvent("Forwarding", "Click", "Work");
  };

  const handleClickContact = () => {
    scrollToComponent(5, 100);
    sendEvent("Forwarding", "Click", "Contact");
  };

  return (
    <div className="menuDesktop">
      <span className="headerMenu">MENU</span>
      <div className="menuDesktopFixed">
        <div className="subMenu">
          <div className={classesHome.dot} />
          <div className={classesHome.line} />
          <button className={classesHome.button} onClick={handleClickHome}>
            Home
          </button>
        </div>
        <div className="subMenu">
          <div className={classesAboutMe.dot} />
          <div className={classesAboutMe.line} />
          <button
            className={classesAboutMe.button}
            onClick={handleClickAboutMe}
          >
            About Me
          </button>
        </div>
        <div className="subMenu">
          <div className={classesWork.dot} />
          <div className={classesWork.line} />
          <button className={classesWork.button} onClick={handleClickWork}>
            Work
          </button>
        </div>
        <div className="subMenu">
          <div className={classesContact.dot} />
          <div className={classesContact.line} />
          <button
            className={classesContact.button}
            onClick={handleClickContact}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
