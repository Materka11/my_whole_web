import "../styles/mobile/workContainer.css";
import "../styles/desktop/workContainer.css";
import { BsArrowRight } from "react-icons/bs";
import { useHasScrolled } from "../hooks/useHasScrolled";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { useEffect, useState } from "react";
import { sendEvent } from "../helpers/sendEvent";

interface WorkContainerProps {
  title: string;
  description: string;
  date: string;
  isCodeOrWork: string;
  link: string;
  id: number;
  isActive?: boolean;
}

interface StyleContainerType {
  backgroundColor?: string;
  color?: string;
  transform?: string;
}

export const WorkContainer = ({
  title,
  description,
  date,
  isCodeOrWork,
  link,
  id,
  isActive,
}: WorkContainerProps) => {
  const scrollWork = useHasScrolled(635);
  const classContainerTransition = useScrollTrigger(scrollWork);
  const [styleContainer, setStyleContainer] = useState<
    StyleContainerType | undefined
  >();
  const [styleButton, setStyleButton] = useState<
    { border?: string } | undefined
  >();

  useEffect(() => {
    const calculateStyles = () => {
      if (!isEven(id) && window.innerWidth < 1440) {
        setStyleContainer({ backgroundColor: "#5444c1", color: "#ffffff" });
        setStyleButton({ border: "2px solid #ffffff" });
      } else if (isEven(id)) {
        setStyleContainer({ backgroundColor: "#ffffff", color: "#5444c1" });
        setStyleButton({ border: "2px solid #5444c1" });
      }
    };

    calculateStyles();
  }, [id]);

  const isEven = (id: number) => {
    if (id % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      style={styleContainer}
      className={`container ${
        isActive ? `active${id}` : ""
      } ${classContainerTransition}`}
    >
      <div className="text">
        <span>{title}</span>
        <p>
          {description}
          <br />
          <br />
          <strong>Created in {date}</strong>
        </p>
      </div>
      <a
        href={link}
        style={styleButton}
        onClick={() => sendEvent("Works", "Click", title)}
      >
        <span>SEE MY {isCodeOrWork}</span>
        <BsArrowRight className="icon" />
        <div className="btnDynamic">
          <span>SEE MY {isCodeOrWork}</span>
          <BsArrowRight className="icon" />
        </div>
      </a>
    </div>
  );
};

export default WorkContainer;
