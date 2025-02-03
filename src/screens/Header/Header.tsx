import { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.scss";
import { Menu } from "../../components/Menu/Menu";
import { Bust } from "../../components/Bust/Bust";
import { DesktopMenu } from "../../components/DesktopMenu";
import { Name } from "../../components/Name/Name";

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
      <section className={styles.content}>
        <Name />
        <Bust />
      </section>
      {/*
      <span className="scroll" />
      <div className="scroll" />
      <DesktopMenu scrollToComponent={scrollToComponent} /> */}
    </div>
  );
};
