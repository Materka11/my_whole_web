import { WorkContainer } from "../../components/WorkContainer/WorkContainer";
// import { IoArrowUndoSharp, IoArrowRedoSharp } from "react-icons/io5";
import { works } from "../../consts/works.consts";
import { useEffect, useState } from "react";
import styles from "./Work.module.scss";

type Opacity = "1" | "0";

interface StyleButton {
  left: Opacity;
  right: Opacity;
}

export const Work = () => {
  const [worksData, setWorksData] = useState(works);
  const [styleButton, setStyleButton] = useState<StyleButton>({
    left: "0",
    right: "1",
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex === 0) {
      setStyleButton({ left: "0", right: "1" });
    } else if (currentIndex === worksData.length - 1) {
      setStyleButton({ left: "1", right: "0" });
    } else {
      setStyleButton({ left: "1", right: "1" });
    }
  }, [currentIndex, worksData]);

  const handleClickActiveContainer = () => {
    let currentIndex = worksData.findIndex(({ isActive }) => isActive);

    if (currentIndex === -1) {
      currentIndex = 0;
    } else if (currentIndex === worksData.length - 1) {
      return;
    }

    setCurrentIndex(currentIndex + 1);

    const updatedWorks = worksData.map((work, index) => ({
      ...work,
      isActive: index === currentIndex + 1,
    }));

    setWorksData(updatedWorks);
  };

  const handleClickInActiveContainer = () => {
    let currentIndex = worksData.findIndex(({ isActive }) => isActive);

    if (currentIndex === -1) {
      currentIndex = worksData.length - 1;
    } else if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);

    const updatedWorks = worksData.map((work, index) => ({
      ...work,
      isActive: index === currentIndex - 1 && index !== 0,
    }));

    setWorksData(updatedWorks);
  };

  return (
    <div className={styles.work}>
      <button
        style={{ opacity: styleButton.left }}
        onClick={handleClickInActiveContainer}
        aria-label="Back"
      >
        {/* <IoArrowRedoSharp className="icon" /> */}
      </button>
      <div className={styles.containerOuter}>
        {worksData.map(
          ({ title, description, date, id, isCodeOrWork, link, isActive }) => (
            <WorkContainer
              key={id}
              id={id}
              title={title}
              date={date}
              description={description}
              isCodeOrWork={isCodeOrWork}
              link={link}
              isActive={isActive}
            />
          )
        )}
      </div>
      <button
        style={{ opacity: styleButton.right }}
        onClick={handleClickActiveContainer}
        aria-label="Forward"
      >
        {/* <IoArrowUndoSharp className="icon" /> */}
      </button>
    </div>
  );
};
