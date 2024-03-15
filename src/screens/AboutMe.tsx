import "../styles/mobile/aboutMe.css";
import "../styles/desktop/aboutMe.css";
import circles from "../assets/img/Component 6 – 1@2x.png";
import stairs from "../assets/img/Component 7 – 1@2x.png";
import { useHasScrolled } from "../hooks/useHasScrolled";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { CommercialExperience } from "../components/CommercialExperience";
import { COMMERCIAL_EXPERIENCE } from "../consts/commercialExperience.consts";
import React from "react";

export const AboutMe = () => {
  const scrollAboutMe = useHasScrolled(440);
  const classContainer = useScrollTrigger(scrollAboutMe);

  return (
    <div className="aboutMe">
      <div className="containerOuter">
        <div className={`container history ${classContainer}`}>
          <h2>History</h2>
          <div className="scrollContainer">
            <p>
              I've been learning frontend development since October 2017 and
              have applied my knowledge by working on various projects. My goal
              was to add more dynamic elements to my pages, so I decided to
              learn my first language, which was JavaScript and used it to
              create a basic game. Afterwards, I explored the powerful library
              React, and after six months of studying it, I created my first
              React project, which was an online store, also learning Git and
              Adobe XD in the process. Then, I moved on to Typescript and used
              it to build this website. To enhance the site further, I added a
              3D component using React Three Fiber, requiring me to learn
              Blender as well. In October 2022, I started studying at the
              Koszalin University of Technology to further expand my knowledge
              and skills in the field of computer science and engineering.
              Additionally, in September 2022, as team member DeveloArt, I
              worked on developing mobile applications for restaurants using
              React Native. After ten months of being a team member at
              DeveloArt, I decided to conclude my collaboration with them. In
              June 2023, I embarked on a new chapter by joining ART-Tech
              Solutions, Here, I contributed to a project utilizing Next.js and
              React technology for the Moja Alivia portal. My primary goal was
              to enhance the SEO of the projects.
            </p>
          </div>
        </div>
        <div className={`container skill ${classContainer}`}>
          <h2>Skills</h2>
          <div className="scrollContainer">
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Styled Components</li>
              <li>React Native</li>
              <li>Jira</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>JavaScript</li>
              <li>React Three Fiber</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Code Review</li>
              <li>Team programming</li>
              <li>Adobe XD</li>
              <li>Trello</li>
              <li>React Hook Form</li>
              <li>React Query</li>
              <li>RTK Query</li>
              <li>Bootstrap 5</li>
              <li>Figma</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div className={`container experience ${classContainer}`}>
          <h2>Experience</h2>
          <div className="scrollContainer">
            {COMMERCIAL_EXPERIENCE.map((experience) => (
              <React.Fragment key={experience.id}>
                <CommercialExperience
                  description={experience.description}
                  endJob={experience.endJob}
                  nameComapany={experience.nameComapany}
                  positionJob={experience.positionJob}
                  responsibilities={experience.responsibilities}
                  startJob={experience.startJob}
                  technologies={experience.technologies}
                />
                <hr />
              </React.Fragment>
            ))}
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
