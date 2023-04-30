import '../styles/mobile/workContainer.css';
import '../styles/desktop/workContainer.css';
import { BsArrowRight } from 'react-icons/bs';
import { useHasScrolled } from '../hooks/useHasScrolled';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

interface WorkContainerType {
  title: string;
  description: string;
  date: string;
  isCodeOrWork: string;
  backgroundColor: string;
  link: string;
  classContainer?: string;
}

export const WorkContainer = ({
  title,
  description,
  date,
  isCodeOrWork,
  backgroundColor,
  link,
  classContainer,
}: WorkContainerType) => {
  const scrollWork = useHasScrolled(635);
  const classContainerTransition = useScrollTrigger(scrollWork);

  const { innerWidth } = window;
  let styleContainer;
  let styleButton;

  if (backgroundColor === 'purple' && innerWidth < 1440) {
    styleContainer = { backgroundColor: '#5444c1', color: '#ffffff' };
  } else if (backgroundColor === 'white') {
    styleContainer = { backgroundColor: '#ffffff', color: '#5444c1' };
  }
  if (backgroundColor === 'purple' && innerWidth < 1440) {
    styleButton = { border: '2px solid #ffffff' };
  } else if (backgroundColor === 'white') {
    styleButton = { border: '2px solid #5444c1' };
  }

  return (
    <div
      style={styleContainer}
      className={`container ${classContainer} ${classContainerTransition}`}
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
      <a href={link} style={styleButton}>
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
