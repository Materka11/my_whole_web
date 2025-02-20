import { SKILLS } from "../../consts/skills.consts";
import { EXPERIENCE } from "../../consts/commercialExperience.consts";
import { education } from "../../consts/education.consts";
import { certificates } from "../../consts/certificates.consts";
import { ContainerInfo } from "../ContainerInfo/ContainerInfo";
import React, { useState } from "react";
import styles from "./ContainersInfo.module.scss";

export const ContainersInfo = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
  };

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

      <ContainerInfo title="My Skills" classContainer="skill">
        <div className={styles.containerSkills}>
          <h3>Frontend</h3>
          <div>
            {SKILLS?.frontend?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerSkills}>
          <h3>Backend</h3>
          <div>
            {SKILLS?.backend?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerSkills}>
          <h3>Tool</h3>
          <div>
            {SKILLS?.tools?.map(({ Icon, label }) => (
              <div
                key={label}
                onMouseMove={handleMouseMove}
                style={
                  {
                    "--x": `${hoverPosition.x}px`,
                    "--y": `${hoverPosition.y}px`,
                  } as React.CSSProperties
                }
              >
                <Icon width="2rem" height="2rem" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </ContainerInfo>

      <ContainerInfo title="Experience" classContainer="experience">
        <></>
      </ContainerInfo>
    </>
  );
};
