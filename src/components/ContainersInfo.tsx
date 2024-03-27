import React from "react";
import ContainerInfo from "../components/ContainerInfo";
import { skills } from "../consts/skills.consts";
import circles from "../assets/img/Component 6 – 1@2x.png";
import stairs from "../assets/img/Component 7 – 1@2x.png";
import { CommercialExperience } from "../components/CommercialExperience";
import { COMMERCIAL_EXPERIENCE } from "../consts/commercialExperience.consts";

const ContainersInfo = () => (
  <>
    <ContainerInfo title="History" classContainer="history">
      <p>
        I've been learning frontend development since October 2017 and have
        applied my knowledge by working on various projects. My goal was to add
        more dynamic elements to my pages, so I decided to learn my first
        language, which was JavaScript and used it to create a basic game.
        Afterwards, I explored the powerful library React, and after six months
        of studying it, I created my first React project, which was an online
        store, also learning Git and Adobe XD in the process. Then, I moved on
        to Typescript and used it to build this website. To enhance the site
        further, I added a 3D component using React Three Fiber, requiring me to
        learn Blender as well. In October 2022, I started studying at the
        Koszalin University of Technology to further expand my knowledge and
        skills in the field of computer science and engineering. Additionally,
        in September 2022, as team member DeveloArt, I worked on developing
        mobile applications for restaurants using React Native. After ten months
        of being a team member at DeveloArt, I decided to conclude my
        collaboration with them. In June 2023, I embarked on a new chapter by
        joining ART-Tech Solutions, Here, I contributed to a project utilizing
        Next.js and React technology for the Moja Alivia portal. My primary goal
        was to enhance the SEO of the projects.
      </p>
    </ContainerInfo>
    <ContainerInfo title="Skills" classContainer="skill">
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </ContainerInfo>
    <ContainerInfo title="Experience" classContainer="experience">
      {COMMERCIAL_EXPERIENCE.map((experience, index) => (
        <React.Fragment key={experience.id}>
          <CommercialExperience
            description={experience.description}
            endJob={experience.endJob}
            nameComapany={experience.nameComapany}
            positionJob={experience.positionJob}
            responsibilities={experience.responsibilities}
            startJob={experience.startJob}
            technologies={experience.technologies}
            isLastIndex={index === COMMERCIAL_EXPERIENCE.length - 1}
          />
        </React.Fragment>
      ))}
    </ContainerInfo>
    <img className="circle1" src={circles} alt="background element" />
    <img className="circle2" src={circles} alt="background element" />
    <img className="stairs1 stairs" src={stairs} alt="background element" />
    <img className="stairs2 stairs" src={stairs} alt="background element" />
  </>
);

export default ContainersInfo;
