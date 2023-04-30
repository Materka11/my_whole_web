import React from 'react';
import background from '../assets/img/Component 12 – 1@2x2.png';
import '../styles/mobile/header.css';
import '../styles/desktop/header.css';
import { Menu } from '../components/Menu';
import { Bust } from '../components/Bust';
import { DesktopMenu } from '../components/DesktopMenu';

export interface NoScroll {
  setClassNoScroll: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ setClassNoScroll }: NoScroll) => {
  const scrollToComponent = (value: number) => {
    const { innerHeight, scrollTo } = window;
    setTimeout(() => {
      scrollTo({
        top: innerHeight * value + 100,
        behavior: 'smooth',
      });
    }, 0);
  };

  return (
    <div className="header">
      <Menu
        setClassNoScroll={setClassNoScroll}
        scrollToComponent={scrollToComponent}
      />
      <Bust />
      <img className="background" src={background} alt="background" />
      <span className="name">
        <strong className="hi">Hi, my</strong> name is <strong>Arek</strong>
        <span className="description">
          I'm a <strong>self-taught frontend developer</strong> from Pomorskie,
          Poland.
        </span>
      </span>
      <span className="scroll" />
      <div className="scroll" />
      <DesktopMenu scrollToComponent={scrollToComponent} />
    </div>
  );
};
