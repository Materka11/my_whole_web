import '../styles/mobile/aboutMe.css';
import '../styles/desktop/aboutMe.css';
import circles from '../assets/img/Component 6 – 1@2x.png';
import stairs from '../assets/img/Component 7 – 1@2x.png';
import { useHasScrolled } from '../hooks/useHasScrolled';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

export const AboutMe = () => {
  const scrollAboutMe = useHasScrolled(440);
  const classContainer = useScrollTrigger(scrollAboutMe);

  return (
    <div className="aboutMe">
      <div className="containerOuter">
        <div className={`container ${classContainer}`}>
          <h2>History</h2>
          <p>
            I've been learning frontend development since October 2017 and have
            applied my knowledge by working on various projects. My goal was to
            add more dynamic elements to my pages, so I decided to learn my
            first language, which was JavaScript and used it to create a basic
            game. Afterwards, I explored the powerful library React, and after
            six months of studying it, I created my first React project, which
            was an online store, also learning Git and Adobe XD in the process.
            Then, I moved on to Typescript and used it to build this website. To
            enhance the site further, I added a 3D component using React Three
            Fiber, requiring me to learn Blender as well. In October 2022, I
            started studying at the Koszalin University of Technology to further
            expand my knowledge and skills in the field of computer science and
            engineering. Additionally, in early 2023, as team member DeveloArt,
            I worked on developing mobile applications for restaurants using
            React Native.
          </p>
        </div>
        <div className={`container skill ${classContainer}`}>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Styled Components</li>
            <li>React Native</li>
            <li>Jira</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>React Context API</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Code Review</li>
            <li>Team programming</li>
          </ul>
        </div>
        <div className={`container experience ${classContainer}`}>
          <h2>Experience</h2>
          <h3>
            <strong>DeveloArt</strong> / Trainee Frontend Developer
          </h3>
          <span>September 2022 - present</span>
          <div>
            <p>
              Creating a mobile application in React Native was my main
              responsibility, which included:
            </p>
            <ul>
              <li>designing and implementing application screens</li>
              <li>writing application logic</li>
              <li>fetching data from the backend,</li>
              <li>conducting code reviews</li>
              <li>participating in weekly meetings</li>
            </ul>
            <strong>
              Technologies used: React Native, TypeScript, CSS, JavaScript,
              Redux
            </strong>
          </div>
        </div>
        <img className="circle1" src={circles} alt="background element" />
        <img className="circle2" src={circles} alt="background element" />
        <img className="stairs1 stairs" src={stairs} alt="background element" />
        <img className="stairs2 stairs" src={stairs} alt="background element" />
      </div>
    </div>
  );
};
