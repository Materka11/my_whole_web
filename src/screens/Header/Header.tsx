import { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.scss";
import background from "../../assets/img/Component 12 – 1@2x2.png";
import { Menu } from "../../components/Menu/Menu";
import { Bust } from "../../components/Bust";
import { DesktopMenu } from "../../components/DesktopMenu";

interface Props {
  setClassNoScroll: Dispatch<SetStateAction<string>>;
}

export const Header = ({ setClassNoScroll }: Props) => {
  const scrollToComponent = (vh: number, px: number = 0) => {
    const { innerHeight, scrollTo } = window;

    setTimeout(() => {
      scrollTo({
        top: innerHeight * vh + px,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <div className={styles.header}>
      <Menu
        setClassNoScroll={setClassNoScroll}
        scrollToComponent={scrollToComponent}
      />
      {/*<Bust />
      <div className="background">
        <img src={background} alt="background" />
      </div>
      <span className="name">
        <strong className="hi">Hi, my</strong> name is <strong>Arek</strong>
        <span className="description">
          I'm a <strong>self-taught frontend developer</strong> from Pomorskie,
          Poland.
        </span>
      </span>
      <span className="scroll" />
      <div className="scroll" />
      <DesktopMenu scrollToComponent={scrollToComponent} /> */}
    </div>
  );
};
