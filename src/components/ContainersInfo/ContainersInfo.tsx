import { skills } from "../../consts/skills.consts";
import { COMMERCIAL_EXPERIENCE } from "../../consts/commercialExperience.consts";
import { education } from "../../consts/education.consts";
import { certificates } from "../../consts/certificates.consts";
import { ContainerInfo } from "../ContainerInfo/ContainerInfo";
import React from "react";

export const ContainersInfo = () => {
  return (
    <>
      <ContainerInfo title="About" classContainer="history">
        <hr />
        <p>
          Innovative and detail-oriented Frontend and Web Developer with over
          two years of experience creating high-performance web applications and
          optimizing user interfaces and experiences. Proficient in React,
          Next.js, and a variety of modern tools and frameworks.Achieved
          measurable improvements in performance and SEO across multiple
          projects, including increasing site traffic by 25% and reducing load
          times by 30%. Dedicated to continuous learning and delivering
          scalable, user-centric solutions. Seeking to leverage skills to
          contribute to cutting-edge projects in dynamic teams within the
          technology, e-commerce, or SaaS industries.
        </p>
      </ContainerInfo>

      <ContainerInfo title="Tech Stack" classContainer="skill">
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </ContainerInfo>

      <ContainerInfo title="Experience" classContainer="experience">
        {COMMERCIAL_EXPERIENCE.map((experience, index) => (
          <React.Fragment key={experience.id}>
            {/* <CommercialExperience
              description={experience.description}
              endJob={experience.endJob}
              nameComapany={experience.nameComapany}
              positionJob={experience.positionJob}
              responsibilities={experience.responsibilities}
              startJob={experience.startJob}
              technologies={experience.technologies}
              isLastIndex={index === COMMERCIAL_EXPERIENCE.length - 1}
            /> */}
          </React.Fragment>
        ))}
      </ContainerInfo>
      <ContainerInfo
        title="Education & Certificates"
        classContainer="education"
      >
        <div>
          {education.map((school) => (
            <React.Fragment key={school.id}>
              {/* <NameWithDate
                name={school.schoolName}
                additionalName={school.department}
                startDate={school.startSchool}
                endDate={school.endSchool}
              /> */}
            </React.Fragment>
          ))}
        </div>
        <hr />
        <div>
          {certificates.map((certificate) => (
            <React.Fragment key={certificate.id}>
              {/* <NameWithDate
                name={certificate.name}
                startDate={certificate.date}
              /> */}
            </React.Fragment>
          ))}
        </div>
      </ContainerInfo>
    </>
  );
};
